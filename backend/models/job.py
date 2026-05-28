from sqlalchemy import Column, Integer, String, DateTime

from sqlalchemy.sql import func
from backend.db.database import Base

class StoryJob(Base):
    __tablename__ = 'story_job'

    id = Column(Integer, primary_key=True, index=True)
    job_id = Column(String, index=True, unique=True)
    session_id = Column(String, index=True)
    theme= Column(String, index=True)
    status = Column(String, index=True)
    story_id=Column(Integer, nullable=True)
    error=Column(String, nullable=True)
    created_at = Column(DateTime(timezone=True), default=func.now(), nullable=False)
    completed_at= Column(DateTime(timezone=True), nullable=True)