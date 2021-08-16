module.exports = function check(str, bracketsConfig) {
  bracketsConfig = bracketsConfig.map(itemJoin => itemJoin.join(''));
  let checkString =str;
  for (let i = 0; i < bracketsConfig.length; i++) {
    if (checkString.includes(bracketsConfig[i])) {
      checkString = checkString.replace(bracketsConfig[i], '')
      i = -1;
    }
  }
  
  return checkString.length === 0 ? true : false;
}
