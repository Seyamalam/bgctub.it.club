create table if not exists public.members (
  id uuid not null default gen_random_uuid(),
  student_id text not null check (length(student_id) = 9),
  name text not null,
  email text not null,
  phone text not null,
  department text not null,
  semester text not null,
  status text not null default 'pending',
  created_at timestamp with time zone not null default timezone('utc'::text, now()),
  updated_at timestamp with time zone not null default timezone('utc'::text, now()),

  constraint members_pkey primary key (id),
  constraint members_student_id_key unique (student_id),
  constraint members_email_key unique (email)
);

-- Create index on department
create index if not exists members_department_idx on public.members using btree (department);

-- Enable Row Level Security
alter table public.members enable row level security;

-- Create policies
create policy "Members are viewable by everyone"
  on public.members
  for select
  using (true);

create policy "Members can be created by authenticated users"
  on public.members
  for insert
  to authenticated
  with check (true);

create policy "Members can be updated by authenticated users"
  on public.members
  for update
  to authenticated
  using (auth.uid() in (
    select auth.uid()
    from auth.users
    where auth.users.email = members.email
  ))
  with check (auth.uid() in (
    select auth.uid()
    from auth.users
    where auth.users.email = members.email
  ));

-- Create function to handle updated_at
create or replace function public.handle_updated_at()
returns trigger
language plpgsql
security definer
set search_path = public
as $$
begin
  new.updated_at = timezone('utc'::text, now());
  return new;
end;
$$;

-- Create trigger for updated_at
create trigger on_members_updated
  before update on public.members
  for each row
  execute function public.handle_updated_at(); 