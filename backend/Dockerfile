# ── Backend Dockerfile ──────────────────────────────────────────────────────
# Python 3.12, uv package manager, FastAPI on port 8000
# Place this file at: make_your_own_adv/backend/Dockerfile
# ─────────────────────────────────────────────────────────────────────────────

FROM python:3.12-slim

# Install uv via pip (avoids external image copy)
RUN pip install uv --no-cache-dir

WORKDIR /app

# Copy dependency files first (layer cache)
COPY pyproject.toml uv.lock ./

# Install dependencies
RUN uv sync --frozen --no-dev --no-install-project

# Copy application source
COPY . .

# Directory for SQLite persistent volume
RUN mkdir -p /data

EXPOSE 8000

CMD ["uv", "run", "uvicorn", "main:app", "--host", "0.0.0.0", "--port", "8000"]
