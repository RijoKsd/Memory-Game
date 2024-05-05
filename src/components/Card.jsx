const Card = ({ emoji, handleCardClick }) => {
  console.log(emoji.character, "emoji from card");
  return (
    <button
      className=""
      onClick={() => {
        handleCardClick(emoji.slug);
      }}
    >
      <div className="card flex-1 h-40 rounded-xl bg-zinc-900  cursor-pointer hover:bg-zinc-800 shadow-md">
        <div className="card-body flex flex-col h-full p-5 justify-center items-center">
          <span className="card-title flex w-full flex-1 justify-center items-center text-6xl animate-flip-x">
            {emoji.character}
          </span>
        </div>
      </div>
    </button>
  );
};

export default Card;
