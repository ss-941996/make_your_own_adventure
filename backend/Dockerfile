FROM python:3.12-slim

RUN pip install uv --no-cache-dir

WORKDIR /app

COPY pyproject.toml uv.lock ./
RUN uv sync --frozen --no-dev --no-install-project

COPY . .

RUN mkdir -p /data \
    && groupadd --gid 10001 appgroup \
    && useradd --uid 10001 --gid 10001 --create-home appuser \
    && chown -R 10001:10001 /app /data

ENV UV_CACHE_DIR=/tmp/uv-cache \
    PYTHONUNBUFFERED=1

USER 10001

EXPOSE 8000

CMD ["uv", "run", "--frozen", "--no-sync", "uvicorn", "main:app", "--host", "0.0.0.0", "--port", "8000"]
