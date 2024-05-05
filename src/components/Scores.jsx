const Scores = ({ score, highScore, className }) => {
  return (
    <div className={`h-[100px] pl-5 animate-fade-in-down ${className}`}>
      <p className="text-lg font-semibold">
        Score : <span>{score}</span>
      </p>
      <p className="text-lg font-semibold">
        High Score: <span>{highScore}</span>
      </p>
    </div>
  );
};

export default Scores;
