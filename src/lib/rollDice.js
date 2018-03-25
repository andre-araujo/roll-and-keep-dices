export default function rollDice(initialValue = 0, explodes) {
  const result = Math.floor(Math.random() * 10 + 1);

  if (explodes && result === 10) {
    return rollDice(initialValue + result);
  }

  return initialValue + result;
}