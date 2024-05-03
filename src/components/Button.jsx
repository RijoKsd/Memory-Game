import TestGameBoard from "./TestGameBoard";
import TestScore from "./TestScore";

const Button = ({ text, onClick }) => {
  return (
    <>
      <button
        className="bg-gradient-to-r from-indigo-500 to-sky-500 text-white text-lg px-5 py-2 rounded-sm font-bold"
        onClick={onClick}
      >
        {text}
      </button>
    </>
  );
};

export default Button;
