import rollDice from "./rollDice";

export default function rollAndKeep(roll, keep, explodes) {
  const results = [];
  
  for(let i = 1; i <= roll; i++) {
    const rollResult = rollDice(0, explodes);
    results.push(rollResult);
  }
  
  const expression = results.join(' + ');
  const sortedResult = results.sort((prev, next) => next > prev ? 1 : -1);
  let keepedResult = 0;
  
  for(let i = 0; i < keep; i++) {
    keepedResult += results[i];
  }
  
  return `${expression} = ${keepedResult}`;
}
  
  