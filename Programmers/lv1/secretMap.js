// https://school.programmers.co.kr/learn/courses/30/lessons/17681

function solution(n, arr1, arr2) {
  let answer = [];
  newArr1 = arr1.map((number) => {
    let x = number.toString(2);
    return x.length < n ? "0".repeat(n - x.length) + x : x;
  });
  newArr2 = arr2.map((number) => {
    let x = number.toString(2);
    return x.length < n ? "0".repeat(n - x.length) + x : x;
  });

  for (let i = 0; i < n; i++) {
    let row = "";
    for (let j = 0; j < n; j++) {
      if (newArr1[i][j] == 0 && newArr2[i][j] == 0) {
        row += " ";
      } else {
        row += "#";
      }
    }

    answer.push(row);
  }

  return answer;
}

solution(5, [9, 20, 28, 18, 11], [30, 1, 21, 17, 28]);

// 다른 사람 풀이
function solution2(n, arr1, arr2) {
  return arr1.map((v, i) =>
    addZero(n, (v | arr2[i]).toString(2)).replace(/1|0/g, (a) =>
      +a ? "#" : " "
    )
  );
}

const addZero = (n, s) => {
  return "0".repeat(n - s.length) + s;
};
