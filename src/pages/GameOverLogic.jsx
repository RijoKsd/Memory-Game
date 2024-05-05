import Button from "../components/Button";
import Scores from "../components/Scores";

 

const GameOverLogic = ({ score, highScore, handleChangeCurrentGameStatus }) => {
  return (
    <div className=" flex flex-col justify-center items-center h-[300px]">
      <h1 className="font-extrabold text-3xl text-[#111111] my-5 text-center">
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
          onClick={() => {
            handleChangeCurrentGameStatus("playing");
          }}
        />
        <Button
          outline
          text="Change Difficulty"
          onClick={() => {
            handleChangeCurrentGameStatus("start");
          }}
        />
      </div>
    </div>
  );
};

export default GameOverLogic
