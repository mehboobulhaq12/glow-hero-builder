create table if not exists public.lead_magnet_submissions (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  email text not null,
  source text,
  created_at timestamptz not null default now()
);

alter table public.lead_magnet_submissions enable row level security;

drop policy if exists "Allow public lead magnet inserts" on public.lead_magnet_submissions;

create policy "Allow public lead magnet inserts"
on public.lead_magnet_submissions
for insert
to anon, authenticated
with check (true);
