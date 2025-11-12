import { supabase } from "./supabaseClient";

export type Player = { id: string; name: string };
export type Round = {
  id: string;
  room_id: string;
  round_number: number;
  normal_word: string;
  undercover_word: string;
  undercover_player_ids: string[];
  eliminated_player_ids: string[];
  status: "ongoing" | "finished";
  winner_side?: "normal" | "undercover";
  assignments?: Record<string, "A" | "B">;
};
export type Room = {
  id: string;
  host_token: string;
  status: "waiting" | "playing" | "finished";
};

export const db = {
  async createRoom(id: string, hostToken: string) {
    if (!supabase) return null;
    const { data, error } = await supabase
      .from("rooms")
      .insert({ id, host_token: hostToken, status: "waiting" })
      .select("*")
      .single();
    if (error) throw error;
    return data as Room;
  },

  async getRoom(id: string) {
    if (!supabase) return null;
    const { data, error } = await supabase
      .from("rooms")
      .select("*")
      .eq("id", id)
      .single();
    if (error) throw error;
    return data as Room;
  },

  async listPlayers(roomId: string) {
    if (!supabase) return [] as Player[];
    const { data, error } = await supabase
      .from("players")
      .select("id,name")
      .eq("room_id", roomId)
      .order("created_at", { ascending: true });
    if (error) throw error;
    return (data || []) as Player[];
  },

  async addPlayer(roomId: string, name: string) {
    if (!supabase) return null;
    const { data, error } = await supabase
      .from("players")
      .insert({ room_id: roomId, name })
      .select("id,name")
      .single();
    if (error) throw error;
    return data as Player;
  },

  async getLatestRound(roomId: string) {
    if (!supabase) return null;
    const { data, error } = await supabase
      .from("rounds")
      .select("*")
      .eq("room_id", roomId)
      .order("round_number", { ascending: false })
      .limit(1)
      .maybeSingle();
    if (error) throw error;
    return (data || null) as Round | null;
  },

  async startRound(roomId: string, roundNumber: number, normalWord: string, undercoverWord: string, assignments: Record<string, "A" | "B">, undercoverIds: string[]) {
    if (!supabase) return null;
    const { data, error } = await supabase
      .from("rounds")
      .insert({
        room_id: roomId,
        round_number: roundNumber,
        normal_word: normalWord,
        undercover_word: undercoverWord,
        undercover_player_ids: undercoverIds,
        eliminated_player_ids: [],
        status: "ongoing",
        assignments,
      })
      .select("*")
      .single();
    if (error) throw error;
    return data as Round;
  },

  async updateElimination(roomId: string, roundId: string, nextEliminated: string[]) {
    if (!supabase) return null;
    const { data, error } = await supabase
      .from("rounds")
      .update({ eliminated_player_ids: nextEliminated, last_updated_at: new Date().toISOString() })
      .eq("id", roundId)
      .eq("room_id", roomId)
      .select("*")
      .single();
    if (error) throw error;
    return data as Round;
  },

  async setRoundFinish(roomId: string, roundId: string, winner: "normal" | "undercover") {
    if (!supabase) return null;
    const { data, error } = await supabase
      .from("rounds")
      .update({ status: "finished", winner_side: winner, last_updated_at: new Date().toISOString() })
      .eq("id", roundId)
      .eq("room_id", roomId)
      .select("*")
      .single();
    if (error) throw error;
    return data as Round;
  },
};