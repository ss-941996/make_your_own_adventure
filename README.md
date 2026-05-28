
# Make Your Own Adventure

An interactive story generator that creates choose-your-own-adventure stories from a theme. The frontend lets a user enter a theme, waits while the backend generates the story, then displays branching choices until the story reaches an ending.

## Features

- Generate a story from a custom theme
- Poll story generation status in the frontend
- Play through branching story nodes
- Restart the current story or create a new one
- FastAPI backend with SQLite storage
- React frontend built with Vite

## Tech Stack

- Frontend: React, Vite, Axios, React Router
- Backend: FastAPI, SQLAlchemy, Pydantic
- Database: SQLite
- Python tooling: uv

## Project Structure


make_your_own_adv/
  backend/
    core/
    db/
    models/
    routers/
    schemas/
    main.py
    pyproject.toml
  frontend/
    src/
      components/
      App.jsx
      main.jsx
    package.json


## Local Setup

### Backend

From the project root:


cd backend
uv sync


Create a `.env` file inside `backend/`:

```env
DATABASE_URL=sqlite:///./database.db
```

Then run the backend from the project root:


cd ..
uv run uvicorn backend.main:app --reload


The backend will run at:

http://localhost:8000


FastAPI docs:


http://localhost:8000/docs


### Frontend

In a second terminal:


cd frontend
npm install
npm run dev


The frontend will run at:


http://localhost:5173


## API Routes

Main backend routes:


POST /api/stories/create
GET  /api/jobs/{job_id}
GET  /api/stories/{story_id}/complete


## Notes

- The local SQLite database is ignored by Git.
- Environment files are ignored by Git.
- `node_modules` and Python virtual environments are ignored by Git.

## Status

This project is currently in development.
```
