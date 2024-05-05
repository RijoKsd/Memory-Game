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
    <div className=" p-4 md:w-1/2 mx-auto mb-24  md:h-[590px]">
      {!isLoading && <Scores score={score} highScore={highScore} />}
      <div className="">
        {!isLoading ? (
          <div
            className={`grid grid-cols-3 md:grid-cols-3  ${
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
    </div>
  );
};

export default PlayingLogic;
