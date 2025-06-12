// 풀이 방식
// https://school.programmers.co.kr/learn/courses/30/lessons/12927
// 각각의 배열 값을 일일이 감소시키는 방식은 배열 수정과정에서 연산이 많이 들어간다고 생각함.
// 현재 값이 다음값과 다른 경우를 찾고 이때 동일하게 만드는데 필요한 값을 계산하여 잔여 작업량에 감소 시킴.
// 그러다보면 가능한 작업량을 모두 소진시키며 최대한 평탄화가 됨
// 평탄화를 더 이상 못하는 시점에서 평탄화된 기준으로 값을 더 해줌
// 나머지값들의 경우에는 평탄화를 못하니깐 그냥 순회하며 제곱하여 더 해줌

function solution(n, works) {
  works.sort((a, b) => b - a);
  works.push(0);

  const length = works.length;
  let sum = 0;

  for (let i = 0; i < length - 1; i++) {
    if (works[i] === 0) break;
    if (sum > 0) {
      sum += works[i] ** 2;
      continue;
    }

    let diffIndex = i + 1;
    for (let j = diffIndex; j < length; j++) {
      if (works[j] === 0) {
        diffIndex = j;
        break;
      }
      if (works[i] === works[j]) continue;
      // 다른 값 찾기
      diffIndex = j;
      break;
    }

    const totalReduce = diffIndex * (works[i] - works[diffIndex]);
    if (totalReduce < n) {
      n -= totalReduce;
    } else if (totalReduce === n) {
      sum += diffIndex * works[diffIndex] ** 2;
    } else {
      const discount = Math.floor(n / diffIndex);
      const spare = n % diffIndex;
      const discountedWork = works[i] - discount;

      sum +=
        spare * (discountedWork - 1) ** 2 +
        (diffIndex - spare) * discountedWork ** 2;
    }
    i = diffIndex - 1;
  }

  return sum;
}

// 이건 그냥 배열 수정하는 경우

function solution2(n, works) {
  works.sort((a, b) => b - a);
  works.push(0); // 끝 처리 쉽게 하기 위해 0 추가

  for (let i = 0; i < works.length - 1; i++) {
    let count = i + 1;
    let diff = works[i] - works[i + 1];
    let totalReduction = count * diff;

    if (n >= totalReduction) {
      // 다음 그룹까지 평준화 가능
      for (let j = 0; j <= i; j++) {
        works[j] = works[i + 1];
      }
      n -= totalReduction;
    } else {
      // 평준화 불가능 -> n을 이 그룹에만 분배
      let reducePerWork = Math.floor(n / count);
      let remain = n % count;
      for (let j = 0; j <= i; j++) {
        works[j] -= reducePerWork;
        if (j < remain) works[j]--;
      }
      n = 0;
      break;
    }
  }

  // 피로도 계산
  return works.reduce((sum, work) => sum + work * work, 0);
}
