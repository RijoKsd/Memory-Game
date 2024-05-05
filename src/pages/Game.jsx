import Button from "../components/Button";
import GameLogic from "./GameLogic";
import { EmojiContext } from "../context/EmojiContext";
import { useContext } from "react";
import Scores from "../components/Scores";
import Card from "../components/Card";
import StartLogic from "./StartLogic";
import Loader from "../components/Loader";

const Game = () => {
  const { isLoading } = useContext(EmojiContext);
  const {
    currentGameStatus,
    handleChangeDifficulty,
    availableEmojis,
    handleCardClick,
    highScore,
    score,
    handleChangeCurrentGameStatus,
  } = GameLogic();

  return (
    // flex flex-col items-center justify-center h-[400px] gap-2
    <div className=" flex flex-col mx-auto justify-between animate-fade-in-up  container">
      {currentGameStatus === "start" && (
        <StartLogic handleChangeDifficulty={handleChangeDifficulty} />
      )}
      {currentGameStatus === "playing" && (
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
      )}

      {currentGameStatus === "game-over" && (
      <div className=" flex-1 flex flex-col items-center justify-center">
          <h1 className="font-extrabold text-3xl text-[#111111] my-5">
            Game Over{" "}
          </h1>
          <Scores
            highScore={highScore}
            score={score}
            className={"w-full text-center"}
          />

          <div className="flex w-full items-center justify-center gap-5">
            <Button
              text="Play Again"
              onClick={()=>{ handleChangeCurrentGameStatus("playing")}}
            />
            <Button
              outline
              text="Change Difficulty"
              onClick={()=>{handleChangeCurrentGameStatus("start")}}
            />
          </div>
        </div>

      )}
    </div>
  );
};

export default Game;

