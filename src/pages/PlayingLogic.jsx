import Scores from "../components/Scores";

 import { useContext } from "react";
 import { EmojiContext } from "../context/EmojiContext";
import Card from "../components/Card";
import Loader from "../components/Loader";

const PlayingLogic = ({
  score,
  highScore,
  availableEmojis,
  handleCardClick,
}) => {
  const { isLoading } = useContext(EmojiContext);
  return (
    <>
      {!isLoading && <Scores score={score} highScore={highScore} />}
      <div className="flex-1 p-5">
        {!isLoading ? (
          <div
            className={`grid grid-cols-3 ${
              availableEmojis.length === 12
                ? "md:grid-cols-4"
                : "md:grid-cols-3"
            } gap-5 justify-center animate-fade-in-up`}
          >
            {availableEmojis.map((emoji, index) => (
              <Card
                key={index}
                emoji={emoji}
                handleCardClick={handleCardClick}
              />
            ))}
          </div>
        ) : (
          <Loader />
        )}
      </div>
    </>
  );
};

export default PlayingLogic
