import { useEffect } from "react";
import { useState } from "react";

const EmojiAPI = (api_key, api_url) => {
  //  state to store the emojis and loading state

  const [emojis, setEmojis] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  //   combine the api key and url
  const API = `${api_url}${api_key}`;

  //  fetch the emojis from the api
  useEffect(() => {
    fetch(API)
      .then((response)=> response.json())
      .then((data) => {
        setEmojis(data);
        setIsLoading(false);
      })
      .catch((error) => {
        console.log(error.message);
      });
  }, [API]);

  return { emojis, isLoading };
};

export default EmojiAPI;
