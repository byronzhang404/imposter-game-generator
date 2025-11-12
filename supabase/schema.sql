-- Enable required extensions
create extension if not exists pgcrypto;

-- Rooms table
create table if not exists public.rooms (
  id uuid primary key,
  host_token text not null,
  status text not null default 'waiting',
  created_at timestamp with time zone not null default now()
);

-- Players table
create table if not exists public.players (
  id uuid primary key default gen_random_uuid(),
  room_id uuid not null references public.rooms(id) on delete cascade,
  name text not null,
  created_at timestamp with time zone not null default now()
);
create index if not exists players_room_id_idx on public.players(room_id);

-- Rounds table
create table if not exists public.rounds (
  id uuid primary key default gen_random_uuid(),
  room_id uuid not null references public.rooms(id) on delete cascade,
  round_number int not null,
  normal_word text not null,
  undercover_word text not null,
  undercover_player_ids uuid[] not null default '{}',
  eliminated_player_ids uuid[] not null default '{}',
  winner_side text,
  status text not null default 'ongoing',
  assignments jsonb,
  created_at timestamp with time zone not null default now(),
  last_updated_at timestamp with time zone not null default now()
);
create index if not exists rounds_room_id_idx on public.rounds(room_id);
create unique index if not exists rounds_room_number_unique on public.rounds(room_id, round_number);

-- NOTE: RLS policies should be configured per your auth model.
-- For initial development you can leave RLS off, or add permissive policies.
-- Example (commented):
-- alter table public.rooms enable row level security;
-- create policy "allow read" on public.rooms for select using (true);
-- create policy "allow insert" on public.rooms for insert with check (true);
-- create policy "allow update" on public.rooms for update using (true);
-- Repeat similar policies for players and rounds.