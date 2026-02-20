# Setup Guide (Windows)

## 1) Install Dependencies

- Node.js 20+
- Python 3.12+

## 2) Backend Setup (Django)

```bash
cd backend
pip install -r requirements.txt
cp .env.example .env
python manage.py migrate
python manage.py createsuperuser
python manage.py runserver
```

Backend endpoints:

- Health: `http://127.0.0.1:8000/api/health/`
- Blog list: `http://127.0.0.1:8000/api/blog/`
- Blog detail: `http://127.0.0.1:8000/api/blog/<slug>/`
- Admin: `http://127.0.0.1:8000/admin/`

## 3) Frontend Setup (Next.js)

```bash
cd frontend
npm install
cp .env.local.example .env.local
npm run dev
```

`npm run dev` and `npm run build` automatically sync `../stitch_promise_portfolio/` into `frontend/stitch_promise_portfolio/`.

Frontend URLs:

- Home: `http://localhost:3000/`
- All pages: `http://localhost:3000/pages`
- Blog: `http://localhost:3000/blog`

## 4) Configure Environment Files

### `frontend/.env.local`

```dotenv
NEXT_PUBLIC_SUPABASE_URL=https://inqxzrzkyuwidascgmjt.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-supabase-anon-key
NEXT_PUBLIC_API_BASE_URL=http://127.0.0.1:8000
```

### `backend/.env`

```dotenv
DJANGO_SECRET_KEY=change-this-secret
DJANGO_DEBUG=true
DJANGO_ALLOWED_HOSTS=127.0.0.1,localhost
DATABASE_URL=sqlite:///db.sqlite3
CORS_ALLOWED_ORIGINS=http://localhost:3000,http://127.0.0.1:3000
CSRF_TRUSTED_ORIGINS=http://localhost:3000,http://127.0.0.1:3000
SUPABASE_URL=https://inqxzrzkyuwidascgmjt.supabase.co
SUPABASE_ANON_KEY=your-supabase-anon-key
SUPABASE_SERVICE_ROLE_KEY=your-supabase-service-role-key
```

## 5) Vercel Environment Variables

If you deploy **frontend** and **backend** as separate Vercel projects, set env vars in each project's Vercel dashboard (`Project > Settings > Environment Variables`).

### Frontend project (safe to expose in browser)

- `NEXT_PUBLIC_SUPABASE_URL`
- `NEXT_PUBLIC_SUPABASE_ANON_KEY`
- `NEXT_PUBLIC_API_BASE_URL` (your deployed backend URL, no trailing slash)

### Backend project (server-only)

- `DJANGO_SECRET_KEY`
- `DJANGO_DEBUG` (set to `false` in production)
- `DJANGO_ALLOWED_HOSTS` (include your backend host)
- `DATABASE_URL`
- `CORS_ALLOWED_ORIGINS` (include your frontend URL)
- `CSRF_TRUSTED_ORIGINS` (include your frontend URL)
- `SUPABASE_URL`
- `SUPABASE_ANON_KEY` (optional)
- `SUPABASE_SERVICE_ROLE_KEY` (**server-only, never `NEXT_PUBLIC_`**)

### Generate `DJANGO_SECRET_KEY`

Run this once and copy the output into `DJANGO_SECRET_KEY`:

```bash
python -c "import secrets; print(secrets.token_urlsafe(64))"
```

## 6) Backend on Vercel

- Set the backend Vercel project **Root Directory** to `backend/`.
- This repo now includes backend Vercel files:
	- `backend/vercel.json`
	- `backend/api/index.py`
- After the first deploy, run migrations against production DB:

```bash
cd backend
python manage.py migrate
```

## 7) Supabase SQL

- Open Supabase SQL Editor.
- Run `supabase/schema.sql`.

## 8) Blog Workflow

1. Open Django admin.
2. Create a post in `Blog > Blog posts`.
3. Upload cover image (optional).
4. Mark as published.
5. Open frontend `/blog` to see it.

## 9) What Remains

- Add production env values.
- Configure production media/static hosting.
- Optional: add auth for admin-facing dashboard pages.
