import Button from "../components/Button";
import GameLogic from "./GameLogic";
import { EmojiContext } from "../context/EmojiContext";
import { useContext } from "react";
import Scores from "../components/Scores";
import Card from "../components/Card";

const Game = () => {
  const { emojiData } = useContext(EmojiContext);
  const { currentGameStatus, handleChangeDifficulty } = GameLogic();

  return (
    // flex flex-col items-center justify-center h-[400px] gap-2
    <div className="  animate-fade-in-up  container">
      {currentGameStatus === "start" && (
        <div className="flex flex-col items-center justify-center h-[400px] gap-2">
          <h1 className="font-extrabold text-3xl text-[#111111] my-5">
            Difficulty
          </h1>

          <div className="flex gap-5">
            <Button text="Easy" onClick={handleChangeDifficulty("easy")} />
            <Button text="Medium" onClick={handleChangeDifficulty("medium")} />
            <Button text="Hard" onClick={handleChangeDifficulty("hard")} />
          </div>
        </div>
      )}
      {currentGameStatus === "playing" && (
        // <div>
        //   <h1 className="font-extrabold text-3xl text-[#111111] my-5">
        //     {/* Score: {score} */}
        //   </h1>
        // </div>
        <div className="grid place-items-center">
          <Scores />
          <div>
            <Card />
          </div>
        </div>
      )}
      {currentGameStatus === "playing" && (
        <div>
          <h1 className="font-extrabold text-3xl text-[#111111] my-5">
            {/* High Score: {highScore} */}
          </h1>
        </div>
      )}
      {currentGameStatus === "game-over" && (
        <div>
          <h1 className="font-extrabold text-3xl text-[#111111] my-5">
            Game Over
          </h1>
        </div>
      )}
    </div>
  );
};

export default Game;

/* <div className="flex flex-col items-center justify-center h-[400px] gap-2 animate-fade-in-up">
        <div>
          <h1 className="font-extrabold text-3xl text-[#111111] my-5">
            Difficulty
          </h1>
        </div>
        <div className="flex gap-5">
          <Button text="Easy" />
          <Button text="Medium" />
          <Button text="Hard" />
          <GameLogic />
        </div>
      </div> */
