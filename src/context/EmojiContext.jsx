import { createContext } from "react";
import EmojiAPI from "../api/EmojiAPI";
export const EmojiContext = createContext();

const EmojiContextProvider = ({ children }) => {
  const api_key = import.meta.env.VITE_API_KEY;
  const api_url = "https://emoji-api.com/emojis?access_key=";
  const { emojiData, isLoading } = EmojiAPI(api_key, api_url);

  return (
    <div>
      <EmojiContext.Provider value={{ emojiData, isLoading }}>
        {children}
      </EmojiContext.Provider>
    </div>
  );
};

export default EmojiContextProvider;
