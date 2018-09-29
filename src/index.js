module.exports = function check(str, bracketsConfig) {
  const bracketsMap = new Map(bracketsConfig);
  const stack = [];

  for (let i = 0, len = str.length; i < len; i++) {
    let bracket = str[i];
    const lastBracket = stack[stack.length - 1];
    const closingBracket = bracketsMap.get(lastBracket);
    const isClosingBracket = (bracket === closingBracket);
 
    if (isClosingBracket) {
      stack.pop();
    } else {
      stack.push(bracket);
    }
  }
  
  return (stack.length === 0);
}