import GameLogic from "./GameLogic";
import { EmojiContext } from "../context/EmojiContext";
import { useContext } from "react";
import StartLogic from "./StartLogic";
import PlayingLogic from "./PlayingLogic";
import GameOverLogic from "./GameOverLogic";

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
        <PlayingLogic
          score={score}
          highScore={highScore}
          availableEmojis={availableEmojis}
          handleCardClick={handleCardClick}
        />
      )}

      {currentGameStatus === "game-over" && (
        <GameOverLogic
          score={score}
          highScore={highScore}
          handleChangeCurrentGameStatus={handleChangeCurrentGameStatus}
        />
      )}
    </div>
  );
};

export default Game;
