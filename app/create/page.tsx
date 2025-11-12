"use client";
import { useMemo, useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

type RoomData = {
  id: string;
  status: "waiting" | "playing" | "finished";
  hostToken: string;
  players: Array<{ id: string; name: string; eliminated?: boolean }>;
  currentRound?: {
    roundNumber: number;
    normalWord: string;
    undercoverWord: string;
    undercoverPlayerIds: string[];
    eliminatedPlayerIds: string[];
    status: "ongoing" | "finished";
    winnerSide?: "normal" | "undercover";
    assignments: Record<string, "A" | "B">; // player -> A(normalWord) or B(undercoverWord)
  };
};

export default function CreateRoomPage() {
  const [name, setName] = useState("");
  const [created, setCreated] = useState<RoomData | null>(null);

  const roomId = useMemo(() => crypto.randomUUID(), []);
  const hostToken = useMemo(() => crypto.randomUUID(), []);

  const createRoom = async () => {
    // 尝试 Supabase 写入；失败则本地模拟
    try {
      const { db } = await import("@/lib/db");
      const { supabase } = await import("@/lib/supabaseClient");
      if (supabase) {
        await db.createRoom(roomId, hostToken);
        if (name.trim()) {
          const p = await db.addPlayer(roomId, name.trim());
          if (p) localStorage.setItem(`room:${roomId}:playerId`, p.id);
        }
        const room: RoomData = { id: roomId, status: "waiting", hostToken, players: [] };
        setCreated(room);
        return;
      }
    } catch (_e) {}

    const room: RoomData = {
      id: roomId,
      status: "waiting",
      hostToken,
      players: [],
    };
    localStorage.setItem(`room:${roomId}`, JSON.stringify(room));
    if (name.trim()) {
      const hostPlayer = { id: crypto.randomUUID(), name: name.trim() };
      room.players.push(hostPlayer);
      localStorage.setItem(`room:${roomId}`, JSON.stringify(room));
      localStorage.setItem(`room:${roomId}:playerId`, hostPlayer.id);
    }
    setCreated(room);
  };

  const hostLink = created ? `/room/${created.id}?host=${created.hostToken}` : "#";
  const playerLink = created ? `/room/${created.id}` : "#";

  return (
    <div className="container mx-auto max-w-xl p-6">
      <Card>
        <CardHeader>
          <CardTitle>Create Room (Host)</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <label className="text-sm font-medium">Your nickname (optional)</label>
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter nickname"
              className="w-full rounded-md border px-3 py-2"
            />
          </div>
          <Button onClick={createRoom}>Create Room</Button>

          {created && (
            <div className="space-y-3 pt-4">
              <div className="text-sm">Room ID: <span className="font-mono">{created.id}</span></div>
              <div className="flex items-center gap-2">
                <Link href={hostLink} className="underline text-blue-600">Open Host Controls</Link>
                <Button
                  variant="secondary"
                  onClick={() => navigator.clipboard.writeText(location.origin + hostLink)}
                >Copy Host Link</Button>
              </div>
              <div className="flex items-center gap-2">
                <Link href={playerLink} className="underline text-blue-600">Open Player Join Link</Link>
                <Button
                  variant="secondary"
                  onClick={() => navigator.clipboard.writeText(location.origin + playerLink)}
                >Copy Player Link</Button>
              </div>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}