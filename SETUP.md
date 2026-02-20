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

Frontend URLs:

- Home: `http://localhost:3000/`
- All pages: `http://localhost:3000/pages`
- Blog: `http://localhost:3000/blog`

## 4) Configure Environment Files

### `frontend/.env.local`

```dotenv
NEXT_PUBLIC_SUPABASE_URL=
NEXT_PUBLIC_SUPABASE_ANON_KEY=
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
```

## 5) Supabase SQL

- Open Supabase SQL Editor.
- Run `supabase/schema.sql`.

## 6) Blog Workflow

1. Open Django admin.
2. Create a post in `Blog > Blog posts`.
3. Upload cover image (optional).
4. Mark as published.
5. Open frontend `/blog` to see it.

## 7) What Remains

- Add production env values.
- Configure production media/static hosting.
- Optional: add auth for admin-facing dashboard pages.
