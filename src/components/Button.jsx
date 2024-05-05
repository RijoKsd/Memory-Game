const Button = ({ text, onClick, outline }) => {
  return (
    <>
      <button
        className={`bg-gradient-to-r from-indigo-500 to-sky-500  hover:bg-gradient-to-r hover:from-indigo-700 hover:to-sky-700  text-white md:text-lg px-5 py-2 rounded-md font-bold ${
          outline
            ? " text-zinc-900 from-transparent to-transparent  border-2 border-indigo-500 hover:shadow hover:shadow-sky-500  hover:from-transparent hover:to-transparent   "
            : ""
        } `}
        onClick={onClick}
      >
        {text}
      </button>
    </>
  );
};

export default Button;
