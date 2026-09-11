create table if not exists photo_submissions (
  id            serial primary key,
  marker_id     text not null,
  user_id       text not null,
  image_url     text not null,
  credit        text not null,
  captured_date text not null default '',
  caption       text not null,
  license       text not null,
  exact         boolean not null default false,
  status        text not null default 'pending',
  review_note   text not null default '',
  reviewed_by   text,
  created_at    timestamptz not null default now(),
  reviewed_at   timestamptz
);

create index if not exists photo_submissions_marker_idx
  on photo_submissions (marker_id, status);
create index if not exists photo_submissions_user_idx
  on photo_submissions (user_id, created_at desc);
create index if not exists photo_submissions_pending_idx
  on photo_submissions (status, created_at desc);
