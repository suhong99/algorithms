// dfs 로 풀었는데 성능이 좋은 방식은 아님

function solution2(begin, target, words) {
  const visited = Array(words.length).fill(false);

  let answer = Infinity;

  if (!words.includes(target)) return 0;

  function dfs(start, count) {
    if (isTransformable(start, target)) {
      answer = Math.min(answer, count + 1);
      return;
    }

    for (let i = 0; i < words.length; i++) {
      if (!visited[i] && isTransformable(start, words[i])) {
        visited[i] = true;
        dfs(words[i], count + 1);
      }
    }
  }

  dfs(begin, 0);
  return answer === Infinity ? 0 : answer;
}

function solution(begin, target, words) {
  if (!words.includes(target)) return 0;

  const queue = [];
  queue.push({ word: begin, count: 0 });

  while (queue.length > 0) {
    const { word, count } = queue.shift();

    if (word === target) return count;

    for (const next of words) {
      if (isTransformable(word, next)) {
        queue.push({ word: next, count: count + 1 });
      }
    }

    // 방문처리는 words 배열에서 제거하는 방식으로 중복방문 방지
    words = words.filter((w) => !isTransformable(word, w));
  }

  return 0;
}

function isTransformable(word1, word2) {
  let diffCount = 0;
  for (let i = 0; i < word1.length; i++) {
    if (word1[i] !== word2[i]) diffCount++;
    if (diffCount > 1) return false;
  }
  return true;
}

console.log(solution("hit", "cog", ["hot", "dot", "dog", "lot", "log", "cog"])); // 4
