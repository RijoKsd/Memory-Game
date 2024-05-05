import Button from "../components/Button";
const StartLogic = ({ handleChangeDifficulty }) => {
  return (
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
  );
};

export default StartLogic;
