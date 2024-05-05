import { useEffect } from "react";
import { useState } from "react";

const EmojiAPI = (api_key, api_url) => {
  //  state to store the emojis and loading state

  const [emojiData, setEmojiData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  //   combine the api key and url
  const API = `${api_url}${api_key}`;

  //  fetch the emojis from the api
  useEffect(() => {
    fetch(API)
      .then((response) => response.json())
      .then((data) => {
        // remove the flag emojis because they are not rendering as flags in the app
        const apiDataWithoutFlags = data.filter(
          (emoji) => !emoji.slug.includes("flag")
        );
        setEmojiData(apiDataWithoutFlags);

        setIsLoading(false);
      })
      .catch((error) => {
        console.log(error.message);
      });
  }, [API]);

  return { emojiData, isLoading };
};

export default EmojiAPI;
