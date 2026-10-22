-- Optional store / deployment links. Existing projects remain unchanged.
alter table public.projects add column if not exists android_url text;
alter table public.projects add column if not exists ios_url text;
alter table public.projects add column if not exists ipad_url text;
alter table public.projects add column if not exists macos_url text;
alter table public.projects add column if not exists windows_url text;
alter table public.projects add column if not exists web_url text;
