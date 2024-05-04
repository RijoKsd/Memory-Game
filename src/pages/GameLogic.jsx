import { EmojiContext } from "../context/EmojiContext";
import { useContext, useState } from "react";
// components
import DifficultyLevel from "../utils/difficultyLevel";

const GameLogic = () => {
  const { emojiData } = useContext(EmojiContext);

  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(0);
  // const [currentEmoji, setCurrentEmoji] = useState(null);
  // const [previousEmoji, setPreviousEmoji] = useState(null);
  // const [isGameOver, setIsGameOver] = useState(false);

  const [difficulty, setDifficulty] = useState("medium"); // easy, medium, hard
  const [difficultyLength, setDifficultyLength] = useState(
    DifficultyLevel[difficulty]
  ); // the DifficultyLevel object is imported from utils/difficultyLevel.js
  const [currentGameStatus, setCurrentGameStatus] = useState("playing"); // start, playing, gameover

  const handleChangeDifficulty = (level) => () => {
    // setDifficulty(level);
    // setDifficultyLength(DifficultyLevel[level]);
    // setCurrentGameStatus("playing");
    console.log(level, "level");
  };

  return {
    currentGameStatus,

    handleChangeDifficulty,
  };
};

export default GameLogic;

/*
total 8 states:
1. score
2. highScore
3. difficulty such as easy, medium, hard
4. difficultyLength such as for easy 4, medium 8, hard 12
5. currentGameStatus such as start, playing, game-over
 */
