//https://school.programmers.co.kr/learn/courses/30/lessons/17677?language=javascript

//

function solution(str1, str2) {
  function explode(text) {
    const result = [];
    for (let i = 0; i < text.length - 1; i++) {
      const node = text.substr(i, 2);
      if (node.match(/[A-Za-z]{2}/)) {
        result.push(node.toLowerCase());
      }
    }
    return result;
  }

  const arr1 = explode(str1);
  const arr2 = explode(str2);
  const set = new Set([...arr1, ...arr2]);
  let union = 0;
  let intersection = 0;

  set.forEach((item) => {
    const has1 = arr1.filter((x) => x === item).length;
    const has2 = arr2.filter((x) => x === item).length;
    union += Math.max(has1, has2);
    intersection += Math.min(has1, has2);
  });
  return union === 0 ? 65536 : Math.floor((intersection / union) * 65536);
}

// 통과 좋은 코드는 아닌듯
function solution(str1, str2) {
  let lowerStr1 = str1.toLowerCase();
  let lowerStr2 = str2.toLowerCase();

  lowerStr1 = lowerStr1.replace(/[^a-z]/g, " ");
  lowerStr2 = lowerStr2.replace(/[^a-z]/g, " ");

  let cross = 0;
  let sum = 0;
  let map = {};
  for (let i = 0; i < lowerStr1.length - 1; i++) {
    const first = lowerStr1[i];
    const second = lowerStr1[i + 1];
    if (notWord(first, second)) {
      continue;
    }

    const word = first + second;
    if (map[word]) {
      map[word]++;
    } else {
      map[word] = 1;
    }
    sum++;
  }

  for (let i = 0; i < lowerStr2.length - 1; i++) {
    const first = lowerStr2[i];
    const second = lowerStr2[i + 1];
    if (notWord(first, second)) {
      continue;
    }
    const word = first + second;
    if (map[word] > 0) {
      map[word]--;
      cross++;
    } else {
      sum++;
    }
  }

  function notWord(a, b) {
    if (a === " " || b === " ") {
      return true;
    }

    return false;
  }

  if (sum === 0) {
    return 65536;
  }
  return Math.floor((cross / sum) * 65536);
}

console.log(solution("FRANCE", "french"));
console.log(solution("handshake", "shake hands"));
console.log(solution("aa1+aa2", "AAAA12"));
console.log(solution("E=M*C^2", "e=m*c^2"));
