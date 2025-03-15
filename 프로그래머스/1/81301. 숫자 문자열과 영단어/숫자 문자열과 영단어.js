function solution(s) {
  const wordToNum = {
    "zero": "0", "one": "1", "two": "2", "three": "3", "four": "4",
    "five": "5", "six": "6", "seven": "7", "eight": "8", "nine": "9"
  };
  
  let result = '';
  
  let temp = '';  
  for (let i = 0; i < s.length; i++) {
    temp += s[i]; 
    if (wordToNum[temp]) {
      result += wordToNum[temp]; 
      temp = '';  
    } else if (!isNaN(s[i])) {
      result += s[i];
      temp= "";
    }
  }
  
  return result-0;
}