# PROMISE NWHATOR — Next.js + Django + Supabase

## Project Structure

- `frontend/` — Next.js App Router frontend
- `backend/` — Django backend (admin + API)
- `stitch_promise_portfolio/` — original HTML source pages
- `frontend/stitch_promise_portfolio/` — frontend runtime copy used for deployment
- `supabase/schema.sql` — SQL setup script for Supabase

## Completed

- 24 stitch pages are mapped and available through dynamic Next route `/<slug>`.
- Django blog app is implemented with admin creation/editing and image uploads.
- Blog API endpoints are available:
  - `GET /api/blog/`
  - `GET /api/blog/<slug>/`
- Frontend API-connected blog pages are available:
  - `/blog`
  - `/blog/<slug>`

## Quick Start

### Frontend

```bash
cd frontend
npm install
cp .env.local.example .env.local
npm run dev
```

### Backend

```bash
cd backend
pip install -r requirements.txt
cp .env.example .env
python manage.py migrate
python manage.py createsuperuser
python manage.py runserver
```

Admin URL: `http://127.0.0.1:8000/admin/`

## Environment Variables

### `frontend/.env.local`

- `NEXT_PUBLIC_SUPABASE_URL`
- `NEXT_PUBLIC_SUPABASE_ANON_KEY`
- `NEXT_PUBLIC_API_BASE_URL` (default `http://127.0.0.1:8000`)

### `backend/.env`

- `DJANGO_SECRET_KEY`
- `DJANGO_DEBUG`
- `DJANGO_ALLOWED_HOSTS`
- `DATABASE_URL`
- `CORS_ALLOWED_ORIGINS`
- `CSRF_TRUSTED_ORIGINS`
- `SUPABASE_URL`
- `SUPABASE_ANON_KEY` (optional)
- `SUPABASE_SERVICE_ROLE_KEY` (server-only)

## Vercel Deployment Notes

- Deploy frontend and backend as separate Vercel projects.
- Frontend project root: `frontend/`
- Backend project root: `backend/`
- Stitched HTML source can remain in repo root `stitch_promise_portfolio/`.
- Frontend auto-syncs those files into `frontend/stitch_promise_portfolio/` before `dev` and `build`.
- Stitched pages render inside one shared frontend header/footer/logo shell with connected top-level links.
- Backend entrypoint files are included:
  - `backend/vercel.json`
  - `backend/api/index.py`
- Run Django migrations after backend deploy:

```bash
cd backend
python manage.py migrate
```

## Supabase

Run `supabase/schema.sql` in Supabase SQL Editor.

## Remaining Tasks

1. Add your real Supabase credentials to env files.
2. Decide whether blog data source should be Django DB only or synced with Supabase.
3. Deploy frontend/backend and set production host/origin values.
