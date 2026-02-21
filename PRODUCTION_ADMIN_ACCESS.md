# Production Admin Access (Vercel + Django)

Use this guide to create an admin user for production and sign in safely.

## 1) Prerequisites

- You can access the Vercel project that hosts the backend.
- You have Python and project dependencies installed locally.
- You are in the repository root.

## 2) Pull production environment variables from Vercel

Use `npx` so no global `vercel` install is required.

```bash
npx --yes vercel@latest login
npx --yes vercel@latest link
npx --yes vercel@latest env pull backend/.env.production --environment=production
```

## 3) Create superuser against production database

### Git Bash (Windows)

```bash
cd backend
set -a && source .env.production && set +a
python manage.py createsuperuser
```

### PowerShell (Windows)

```powershell
cd backend
Get-Content .env.production | ForEach-Object {
  if ($_ -match '^[^#].+=') {
    $name, $value = $_ -split '=', 2
    [Environment]::SetEnvironmentVariable($name.Trim(), $value.Trim(), 'Process')
  }
}
python manage.py createsuperuser
```

## 4) Access admin

- URL: `https://<your-backend-domain>/admin/`
- Sign in with the superuser credentials you just created.

## 5) If the username already exists

Set a new password instead:

```bash
cd backend
python manage.py changepassword <username>
```

## 6) Common issues

- `python manage.py ...` fails from repo root: run commands from `backend/`.
- `vercel: command not found`: use `npx --yes vercel@latest ...`.
- Login works but admin fails: check that `.env.production` points to the production DB and then retry.
