#!/bin/bash
set -e

echo "══════════════════════════════════════════════"
echo "  Artikeys Backend — Bootstrapping..."
echo "══════════════════════════════════════════════"

# ─── 1. Environment Check ─────────────────────────
# We rely on APP_ENV=docker loading .env.docker
echo "→ APP_ENV is set to: $APP_ENV"

# ─── 2. Application Key ───────────────────────────
php artisan key:generate --force --no-interaction
echo "→ Application key generated."

# ─── 3. Wait for MySQL ────────────────────────────
echo "→ Waiting for MySQL to be ready..."
MAX_RETRIES=30
RETRY_COUNT=0
# Note: db:monitor uses the default connection, which should now point to 'db' host
until php artisan db:monitor --databases=mysql > /dev/null 2>&1 || [ $RETRY_COUNT -ge $MAX_RETRIES ]; do
    echo "  Waiting for database... (attempt $((RETRY_COUNT + 1))/$MAX_RETRIES)"
    sleep 2
    RETRY_COUNT=$((RETRY_COUNT + 1))
done

if [ $RETRY_COUNT -ge $MAX_RETRIES ]; then
    echo "  ⚠ MySQL not reachable after $MAX_RETRIES attempts, trying migration anyway..."
fi

# ─── 4. Database Migration & Seeding ──────────────
echo "→ Running migrate:fresh --seed..."
php artisan migrate:fresh --seed --force --no-interaction
echo "→ Database seeded successfully."

# ─── 5. Storage Link ─────────────────────────────
php artisan storage:link --force --no-interaction 2>/dev/null || true
echo "→ Storage linked."

# ─── 6. Clear & Cache ────────────────────────────
php artisan config:clear
php artisan route:clear
php artisan view:clear
echo "→ Caches cleared."

echo "══════════════════════════════════════════════"
echo "  ✅ Backend ready — starting server on :8000"
echo "══════════════════════════════════════════════"

# ─── 7. Start Laravel Dev Server ──────────────────
exec php artisan serve --host=0.0.0.0 --port=8000
