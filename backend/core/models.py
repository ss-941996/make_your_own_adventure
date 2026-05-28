from typing import List, Dict, Any, Optional
from pydantic import BaseModel, Field

class StoryOptionLLM(BaseModel):
    text: str = Field(description="The text of the option shown to user")
    nextNode: Dict[str, Any] = Field(description="Next Node content and its opt")

class StoryNodeLLM(BaseModel):
    content: str = Field(description="The main content of story node")
    isEnding: bool = Field(description="Whether the story node is ending or not")
    isWinningEnding: bool = Field(description="Whether the story node is winning or not")
    options:Optional[List[StoryOptionLLM]] = Field(default=None, description="The options for this node")

class StoryLLMResponse(BaseModel):
    title: str = Field(description="The title of the story")
    rootNode: StoryNodeLLM = Field(description="The root node of the story")
