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
  // const [currentEmoji, setCurrentEmoji] = useState(null);
  // const [previousEmoji, setPreviousEmoji] = useState(null);
  // const [isGameOver, setIsGameOver] = useState(false);

  const [difficulty, setDifficulty] = useState("medium"); // easy, medium, hard
  // This is the number of emojis that will be displayed on the screen
  const [difficultyLength, setDifficultyLength] = useState(
    DifficultyLevel[difficulty]
  ); // the DifficultyLevel object is imported from utils/difficultyLevel.js
  const [currentGameStatus, setCurrentGameStatus] = useState("start"); // start, playing, game-over

 
  useEffect(() => {
    if (emojiData && availableEmojis.length < difficultyLength) {
      //  call a function that will shuffle the emojis and set the availableEmojis
      getAvailableEmojis();
    }
  }, [emojiData, difficultyLength]);
 

  const getAvailableEmojis = () => {
    setAvailableEmojis([]);
    const shuffledEmojiData = shuffleArray(emojiData);

    console.log(shuffledEmojiData, "shuffledEmojiData");
    console.log(emojiData, "emojiData")
    // for (let i = 0; i < difficultyLength; i++) {
    //   const emoji = shuffledEmojiData[i];
    //   setAvailableEmojis((prev) => [...prev, emoji]);
    // }
  };
    

  // This function will be called when the user selects a difficulty level (easy, medium, hard)
  const handleChangeDifficulty = (level) => () => {
    setDifficulty(level);
    setDifficultyLength(DifficultyLevel[level]);
    setCurrentGameStatus("playing");
  };

  const handleCardClick = (slug) => {
    console.log(slug, "slug from game logic");
    // if (currentEmoji === null) {
    //   setCurrentEmoji(slug);
    // } else {
    //   if (currentEmoji === slug) {
    //     setScore(score + 1);
    //     setCurrentEmoji(null);
    //   } else {
    //     if (score > highScore) {
    //       setHighScore(score);
    //     }
    //     setScore(0);
    //     setCurrentEmoji(null);
    //   }
    // }
  };
  const handleChangeCurrentGameStatus = (status) => {
    setCurrentGameStatus(status);
  };

  return {
    currentGameStatus,

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
