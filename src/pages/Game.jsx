import EmojiAPI from "../api/EmojiAPI";
import Button from "../components/Button";
import Loader from "../components/Loader";
const Game = () => {
  const api_key = import.meta.env.VITE_API_KEY;
  const api_url = import.meta.env.VITE_API_URL;

  // Pass the api key and url to the EmojiAPI component and it will return emojis and loading state
  const { emojis, isLoading } = EmojiAPI(api_key, api_url);

  return (
    <div className="flex flex-col items-center justify-center h-[400px] gap-2 animate-fade-in-up">
      <div>
        <h1 className="font-extrabold text-3xl text-[#111111] my-5">
          Difficulty
        </h1>
      </div>
      <div className="flex gap-5">
        <Button text="Easy" />
        <Button text="Medium" />
        <Button text="Hard" />
      </div>
    </div>
  );
};

export default Game;
