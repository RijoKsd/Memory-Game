import shuffleArray from "../utils/shuffleArray";
import { EmojiContext } from "../context/EmojiContext";
import { useContext, useEffect, useState } from "react";
// components
import DifficultyLevel from "../utils/difficultyLevel";

const GameLogic = () => {
  const { emojiData } = useContext(EmojiContext);

  // the availableEmojis will be the emojis that will be displayed on the screen
  const [availableEmojis, setAvailableEmojis] = useState([]);
  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(0);
  const [clickedEmojisHistory, setClickedEmojisHistory] = useState([]);
  const [clickedCardCount, setClickedCardCount] = useState(0);

  const [difficulty, setDifficulty] = useState("medium"); // easy, medium, hard
  // This is the number of emojis that will be displayed on the screen
  const [difficultyLength, setDifficultyLength] = useState(
    DifficultyLevel[difficulty]
  ); // the DifficultyLevel object is imported from utils/difficultyLevel.js
  const [currentGameStatus, setCurrentGameStatus] = useState("game-over"); // start, playing, game-over

  // useEffect(() => {
  //   if (emojiData && availableEmojis.length < difficultyLength) {
  //     //  call a function that will shuffle the emojis and set the availableEmojis
  //     getAvailableEmojis();

  //     if (score > highScore) {
  //       setHighScore(score);
  //     }
  //     if (clickedCardCount === difficultyLength) {
  //       getAvailableEmojis();
  //       setClickedCardCount(0);
  //     }
  //   }
  // }, [emojiData, difficultyLength, score, highScore, clickedCardCount]);

  useEffect(() => {
    if (emojiData && emojiData.length > 0 && availableEmojis.length < difficultyLength) {
      //  call a function that will shuffle the emojis and set the availableEmojis
      getAvailableEmojis();
    }
  }, [emojiData, difficultyLength, availableEmojis.length]);

  useEffect(() => {
    if (score > highScore) {
      setHighScore(score);
    }
    if (clickedCardCount === difficultyLength) {
      getAvailableEmojis();
      setClickedCardCount(0);
    }
  }, [score, highScore]);

  const getAvailableEmojis = () => {
    setAvailableEmojis([]);

    const shuffledEmojiData = shuffleArray(emojiData);

    for (let i = 0; i < difficultyLength; i++) {
      const emoji = shuffledEmojiData[i];
      setAvailableEmojis((prev) => [...prev, emoji]);
    }
  };

 

  // This function will be called when the user selects a difficulty level (easy, medium, hard)
  const handleChangeDifficulty = (level) => () => {
    setDifficulty(level);
    setDifficultyLength(DifficultyLevel[level]);
    setCurrentGameStatus("playing");
  };

  const handleCardClick = (id) => {
 
    if (clickedEmojisHistory.includes(id)) {
      setScore(0);
      setClickedCardCount(0);
      setClickedEmojisHistory([]);
      getAvailableEmojis();
      shuffleArray(availableEmojis);
      setCurrentGameStatus("game-over");
      return;
    }

    setClickedEmojisHistory((prev) => [...prev, id]);
    setScore((prev) => prev + 1);
    setClickedCardCount((prev) => prev + 1);
    shuffleArray(availableEmojis);
  };
  const handleChangeCurrentGameStatus = (status) => {
    setCurrentGameStatus(status);
  };

  return {
    currentGameStatus,
    clickedEmojisHistory,
    handleChangeDifficulty,
    availableEmojis,
    handleCardClick,
    handleChangeCurrentGameStatus,
    highScore,
    score,
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
