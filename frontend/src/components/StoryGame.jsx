import { useState, useEffect } from "react";

function StoryGame({ story, onNewStory }) {
  const [currentNodeId, setCurrentNodeId] = useState(null);
  const [currentNode, setCurrentNode] = useState(null);
  const [options, setOptions] = useState([]);
  const [isEnding, setIsEnding] = useState(false);
  const [isWinningEnding, setIsWinningEnding] = useState(false);

  useEffect(() => {
    if (story && story.root_node) {
      setCurrentNodeId(story.root_node.id);
    }
  }, [story]);

  useEffect(() => {
    if (currentNodeId && story && story.all_nodes) {
      const node = story.all_nodes[currentNodeId];

      if (!node) {
        return;
      }

      setCurrentNode(node);
      setIsEnding(node.is_ending);
      setIsWinningEnding(node.is_winning_ending);

      if (!node.is_ending && node.options && node.options.length > 0) {
        setOptions(node.options);
      } else {
        setOptions([]);
      }
    }
  }, [currentNodeId, story]);

  const chooseOptions = (optionID) => {
    setCurrentNodeId(optionID);
  };

  const restart = () => {
    if (story && story.root_node) {
      setCurrentNodeId(story.root_node.id);
    }
  };

  return (
    <div className="story-game">
      <header className="story-header">
        <h2>{story.title}</h2>
      </header>

      <div className="story-content">
        {currentNode && (
          <div className="story-node">
            <p>{currentNode.content}</p>

            {isEnding ? (
              <div className="story-ending">
                <h3>{isWinningEnding ? "congrats" : "the end"}</h3>
                <h3>
                  {isWinningEnding
                    ? "reached a winning ending"
                    : "adventure ended"}
                </h3>
              </div>
            ) : (
              <div className="story-options">
                <h3>what'll you do</h3>

                <div className="options-list">
                  {options.map((option, index) => {
                    return (
                      <button
                        key={index}
                        onClick={() => chooseOptions(option.node_id)}
                        className="option-btn"
                      >
                        {option.text}
                      </button>
                    );
                  })}
                </div>
              </div>
            )}
          </div>
        )}

        <div className="story-controls">
          <button onClick={restart} className="reset-btn">
            restart story
          </button>

          {onNewStory && (
            <button onClick={onNewStory} className="newStory-btn">
              New Story
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default StoryGame;