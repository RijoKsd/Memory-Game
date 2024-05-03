/**
 * The `shuffleArray` function takes an array as input and shuffles its elements randomly before
 * returning the shuffled array.
 * @param array - The `array` parameter in the `shuffleArray` function is an array of elements that you
 * want to shuffle.
 * @returns The `shuffleArray` function returns the input array after shuffling its elements randomly.
 */
const shuffleArray = (array) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
};

export default shuffleArray;
