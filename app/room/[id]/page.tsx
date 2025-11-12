"use client";
import { useEffect, useMemo, useState } from "react";
import { useSearchParams } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { getRandomWordPair } from "@/lib/words";
import { db } from "@/lib/db";
import { supabase } from "@/lib/supabaseClient";

type Player = { id: string; name: string; eliminated?: boolean };
type Round = {
  roundNumber: number;
  normalWord: string;
  undercoverWord: string;
  undercoverPlayerIds: string[];
  eliminatedPlayerIds: string[];
  status: "ongoing" | "finished";
  winnerSide?: "normal" | "undercover";
  assignments: Record<string, "A" | "B">;
};
type Room = {
  id: string;
  status: "waiting" | "playing" | "finished";
  hostToken: string;
  players: Player[];
  currentRound?: Round;
};

function loadRoom(id: string): Room | null {
  const raw = localStorage.getItem(`room:${id}`);
  if (!raw) return null;
  try {
    return JSON.parse(raw) as Room;
  } catch {
    return null;
  }
}

function saveRoom(room: Room) {
  localStorage.setItem(`room:${room.id}`, JSON.stringify(room));
}

export default function RoomPage({ params }: { params: { id: string } }) {
  const search = useSearchParams();
  const hostQueryToken = search.get("host") || undefined;
  const roomId = params.id;

  const [room, setRoom] = useState<Room | null>(null);
  const [nickname, setNickname] = useState("");
  const [playerId, setPlayerId] = useState<string | null>(null);
  const [reveal, setReveal] = useState(false);
  const isHost = !!(room && hostQueryToken && hostQueryToken === room.hostToken);

  useEffect(() => {
    const bootstrap = async () => {
      if (supabase) {
        try {
          const r = await db.getRoom(roomId);
          const players = await db.listPlayers(roomId);
          const latestRound = await db.getLatestRound(roomId);
          const composed: Room = {
            id: r?.id || roomId,
            status: (latestRound?.status === "finished" ? "finished" : latestRound ? "playing" : "waiting"),
            hostToken: r?.host_token || "",
            players: players.map((p) => ({ id: p.id, name: p.name })),
            currentRound: latestRound
              ? {
                  roundNumber: latestRound.round_number,
                  normalWord: latestRound.normal_word,
                  undercoverWord: latestRound.undercover_word,
                  undercoverPlayerIds: latestRound.undercover_player_ids,
                  eliminatedPlayerIds: latestRound.eliminated_player_ids,
                  status: latestRound.status,
                  winnerSide: latestRound.winner_side as any,
                  assignments: latestRound.assignments || {},
                }
              : undefined,
          };
          setRoom(composed);
        } catch (_e) {
          // fallback to local
          const r = loadRoom(roomId);
          if (!r) {
            const initial: Room = {
              id: roomId,
              status: "waiting",
              hostToken: crypto.randomUUID(),
              players: [],
            };
            saveRoom(initial);
            setRoom(initial);
          } else {
            setRoom(r);
          }
        }
      } else {
        const r = loadRoom(roomId);
        if (!r) {
          const initial: Room = {
            id: roomId,
            status: "waiting",
            hostToken: crypto.randomUUID(),
            players: [],
          };
          saveRoom(initial);
          setRoom(initial);
        } else {
          setRoom(r);
        }
      }
      const pid = localStorage.getItem(`room:${roomId}:playerId`);
      if (pid) setPlayerId(pid);
    };
    bootstrap();
  }, [roomId]);

  const me = useMemo(() => room?.players.find((p) => p.id === playerId) || null, [room, playerId]);

  const joinRoom = async () => {
    if (!room) return;
    const name = nickname.trim();
    if (!name) return;
    if (supabase) {
      try {
        const p = await db.addPlayer(roomId, name);
        if (p) {
          setPlayerId(p.id);
          localStorage.setItem(`room:${roomId}:playerId`, p.id);
          const players = await db.listPlayers(roomId);
          setRoom({ ...room, players: players.map((x) => ({ id: x.id, name: x.name })) });
          return;
        }
      } catch (_e) {}
    }
    const newPlayer: Player = { id: crypto.randomUUID(), name };
    const next: Room = { ...room, players: [...room.players, newPlayer] };
    saveRoom(next);
    setRoom(next);
    setPlayerId(newPlayer.id);
    localStorage.setItem(`room:${roomId}:playerId`, newPlayer.id);
  };

  const startGame = async () => {
    if (!room || room.players.length < 3) return; // 至少3人更有趣
    const [A, B] = getRandomWordPair();
    // 随机选择一个卧底
    const undercoverIndex = Math.floor(Math.random() * room.players.length);
    const undercoverId = room.players[undercoverIndex].id;
    const assignments: Record<string, "A" | "B"> = {};
    for (const p of room.players) {
      assignments[p.id] = p.id === undercoverId ? "B" : "A";
    }
    const round: Round = {
      roundNumber: (room.currentRound?.roundNumber || 0) + 1,
      normalWord: A,
      undercoverWord: B,
      undercoverPlayerIds: [undercoverId],
      eliminatedPlayerIds: [],
      status: "ongoing",
      assignments,
    };
    if (supabase) {
      try {
        const latest = await db.getLatestRound(room.id);
        const rn = (latest?.round_number || 0) + 1;
        await db.startRound(room.id, rn, A, B, assignments, [undercoverId]);
        const refreshed = await db.getLatestRound(room.id);
        const next: Room = {
          ...room,
          status: "playing",
          currentRound: refreshed
            ? {
                roundNumber: refreshed.round_number,
                normalWord: refreshed.normal_word,
                undercoverWord: refreshed.undercover_word,
                undercoverPlayerIds: refreshed.undercover_player_ids,
                eliminatedPlayerIds: refreshed.eliminated_player_ids,
                status: refreshed.status,
                assignments: refreshed.assignments || {},
              }
            : round,
        };
        setRoom(next);
        return;
      } catch (_e) {}
    }
    const next: Room = { ...room, status: "playing", currentRound: round };
    saveRoom(next);
    setRoom(next);
  };

  const eliminatePlayer = async (pid: string) => {
    if (!room || !room.currentRound) return;
    const eliminated = new Set(room.currentRound.eliminatedPlayerIds);
    eliminated.add(pid);
    const nextRound: Round = { ...room.currentRound, eliminatedPlayerIds: Array.from(eliminated) };

    // 判定胜负
    const remaining = room.players.filter((p) => !eliminated.has(p.id));
    const undercoverOut = nextRound.undercoverPlayerIds.every((u) => eliminated.has(u));
    if (undercoverOut) {
      nextRound.status = "finished";
      nextRound.winnerSide = "normal";
    } else if (remaining.length <= 3) {
      nextRound.status = "finished";
      nextRound.winnerSide = "undercover";
    }

    if (supabase) {
      try {
        const latest = await db.getLatestRound(room.id);
        if (latest) {
          const updated = await db.updateElimination(room.id, latest.id, nextRound.eliminatedPlayerIds);
          // 保护：若更新结果为空，回退到本地状态更新，避免空值引用
          if (!updated) {
            const next: Room = {
              ...room,
              currentRound: nextRound,
              status: nextRound.status === "finished" ? "finished" : "playing",
            };
            setRoom(next);
            return;
          }
          const remainingCount = room.players.length - nextRound.eliminatedPlayerIds.length;
          const undercoverOutDb = (updated.undercover_player_ids || []).every((u) => nextRound.eliminatedPlayerIds.includes(u));
          if (undercoverOutDb) {
            await db.setRoundFinish(room.id, updated.id, "normal");
          } else if (remainingCount <= 3) {
            await db.setRoundFinish(room.id, updated.id, "undercover");
          }
          const refreshed = await db.getLatestRound(room.id);
          const next: Room = {
            ...room,
            currentRound: refreshed
              ? {
                  roundNumber: refreshed.round_number,
                  normalWord: refreshed.normal_word,
                  undercoverWord: refreshed.undercover_word,
                  undercoverPlayerIds: refreshed.undercover_player_ids,
                  eliminatedPlayerIds: refreshed.eliminated_player_ids,
                  status: refreshed.status,
                  winnerSide: refreshed.winner_side as any,
                  assignments: refreshed.assignments || {},
                }
              : nextRound,
            status: refreshed?.status === "finished" ? "finished" : "playing",
          };
          setRoom(next);
          return;
        }
      } catch (_e) {}
    }
    const next: Room = { ...room, currentRound: nextRound, status: nextRound.status === "finished" ? "finished" : "playing" };
    saveRoom(next);
    setRoom(next);
  };

  const nextRound = () => {
    if (!room) return;
    // 清除淘汰状态，重新分配词语
    const resetPlayers = room.players.map((p) => ({ ...p, eliminated: false }));
    const [A, B] = getRandomWordPair();
    const undercoverIndex = Math.floor(Math.random() * resetPlayers.length);
    const undercoverId = resetPlayers[undercoverIndex].id;
    const assignments: Record<string, "A" | "B"> = {};
    for (const p of resetPlayers) {
      assignments[p.id] = p.id === undercoverId ? "B" : "A";
    }
    const round: Round = {
      roundNumber: (room.currentRound?.roundNumber || 0) + 1,
      normalWord: A,
      undercoverWord: B,
      undercoverPlayerIds: [undercoverId],
      eliminatedPlayerIds: [],
      status: "ongoing",
      assignments,
    };
    const next: Room = { ...room, status: "playing", players: resetPlayers, currentRound: round };
    saveRoom(next);
    setRoom(next);
  };

  const myWord = (() => {
    if (!room?.currentRound || !playerId) return null;
    const slot = room.currentRound.assignments[playerId];
    if (!slot) return null;
    return slot === "A" ? room.currentRound.normalWord : room.currentRound.undercoverWord;
  })();

  return (
    <div className="container mx-auto max-w-2xl p-6 space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Room: {roomId}</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="text-sm">Status: <span className="font-mono">{room?.status ?? "loading..."}</span></div>

          {!me && room?.status === "waiting" && (
            <div className="space-y-3">
              <label className="text-sm font-medium">Enter your nickname to join</label>
              <input
                value={nickname}
                onChange={(e) => setNickname(e.target.value)}
                placeholder="Nickname"
                className="w-full rounded-md border px-3 py-2"
              />
              <Button onClick={joinRoom}>Join Room</Button>
            </div>
          )}

          {me && (
            <div className="space-y-2">
              <div className="text-sm">You: <span className="font-medium">{me.name}</span></div>
              {room?.currentRound && (
                <div className="space-y-2">
                  <div className="text-sm">Press to reveal your word:</div>
                  <Button
                    variant={reveal ? "default" : "secondary"}
                    onMouseDown={() => setReveal(true)}
                    onMouseUp={() => setReveal(false)}
                    onTouchStart={() => setReveal(true)}
                    onTouchEnd={() => setReveal(false)}
                  >
                    {reveal ? (myWord ?? "-") : "Hold to Reveal"}
                  </Button>
                </div>
              )}
            </div>
          )}

          <div className="space-y-2">
            <div className="font-medium">Players</div>
            <ul className="list-disc pl-5">
              {room?.players.map((p) => {
                const eliminated = room?.currentRound?.eliminatedPlayerIds.includes(p.id);
                const isUndercover = room?.currentRound?.undercoverPlayerIds.includes(p.id);
                return (
                  <li key={p.id} className={eliminated ? "line-through opacity-60" : ""}>
                    {p.name}
                    {isHost && room?.currentRound?.status === "ongoing" && !eliminated && (
                      <Button size="sm" variant="ghost" className="ml-2" onClick={() => eliminatePlayer(p.id)}>Eliminate</Button>
                    )}
                    {isHost && room?.currentRound?.status === "finished" && isUndercover && (
                      <span className="ml-2 text-xs">(undercover)</span>
                    )}
                  </li>
                );
              })}
            </ul>
          </div>

          {isHost && (
            <div className="space-y-2">
              <div className="font-medium">Host Controls</div>
              {room?.status === "waiting" && (
                <Button onClick={startGame} disabled={(room?.players.length ?? 0) < 3}>
                  Start Game
                </Button>
              )}
              {room?.currentRound?.status === "finished" && (
                <div className="space-y-2">
                  <div className="text-sm">Winner: {room.currentRound.winnerSide}</div>
                  <Button onClick={nextRound}>Start Next Round</Button>
                </div>
              )}
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}