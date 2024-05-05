import GameLogic from "./GameLogic";
import { EmojiContext } from "../context/EmojiContext";
import { useContext } from "react";
import StartLogic from "./StartLogic";
import PlayingLogic from "./PlayingLogic";
import GameOverLogic from "./GameOverLogic";

const Game = () => {
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
    <div>
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
