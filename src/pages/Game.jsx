import Button from "../components/Button";
import GameLogic from "./GameLogic";
import { EmojiContext } from "../context/EmojiContext";
import { useContext } from "react";

const Game = () => {
  const { emojiData} = useContext(EmojiContext);
  

  
  return (
    <>
      <div className="flex flex-col items-center justify-center h-[400px] gap-2 animate-fade-in-up">
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
      </div>

      {/* {renderGameContent()} */}
    </>
  );
};

export default Game;
