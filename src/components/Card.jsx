const Card = ({ emoji, handleCardClick }) => {
  return (
    <button
      className=""
      onClick={() => {
        handleCardClick(emoji.slug);
      }}
    >
      <div className="border shadow-sm border-zinc-400 p-6 rounded-md animate-flip-x hover:shadow-lg ">
        <div className="flex items-center justify-center ">
          <span className="  items-center text-6xl ">{emoji.character}</span>
        </div>
      </div>
    </button>
  );
};

export default Card;
