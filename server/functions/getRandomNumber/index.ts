/**
 * Returns a random integer between the range provided.
 * @param min number
 * @param max number
 */
global.getRandomNumber = (min: number, max: number) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
}
