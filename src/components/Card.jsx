const Card = () => {
  const emojis = [
    "🍎",
    "🍌",
    "🍒",
    "🍇",
    "🍉",
    "🍊",
    "🍋",
    "🍍",
    "🍓",
    "🍑",
    "🍐",
    "🍏",
  ];
  return (
    <div className= "">
      <div className="grid grid-cols-4 place-items-center gap-3 mt-3">
        {emojis.map((emoji, index) => (
          <div key={index} className="shadow-md text-6xl p-5 rounded-lg text-center cursor-pointer"
          >{emoji}</div>
        ))}
      </div>
    </div>
  );
};

export default Card;
