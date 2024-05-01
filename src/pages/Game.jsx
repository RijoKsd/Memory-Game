import EmojiAPI from "../api/EmojiAPI";
const Game = () => {
  const api_key = import.meta.env.VITE_API_KEY;
  const api_url = import.meta.env.VITE_API_URL;

  // Pass the api key and url to the EmojiAPI component and it will return emojis and loading state
  const { emojis, isLoading } = EmojiAPI(api_key, api_url);

  return (
    <div>
       
    </div>
  );
};

export default Game;
