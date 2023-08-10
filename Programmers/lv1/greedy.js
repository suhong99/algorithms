// https://school.programmers.co.kr/learn/courses/30/lessons/42862

// 런타임 에러
function solution1(n, lost, reserve) {
  let answer = n - lost.length; // 미리 lost를 뺌
  for (let i = 0; i < lost.length; i++) {
    const exist = reserve.indexOf(lost[i]);
    if (exist !== -1) {
      reserve.splice(index, 1);
      lost.splice(i, 1);
      i--;
    }
  }
  lost.map((lost) => {
    if (lost > 1) {
      const index = reserve.indexOf(lost - 1);
      if (index !== -1) {
        reserve.splice(index, 1);
        answer++;
        return lost;
      }
    }
    if (lost !== n) {
      const index = reserve.indexOf(lost + 1);
      if (index !== -1) {
        reserve.splice(index, 1);
        answer++;
      }
    }
    return lost;
  });
  //console.log(answer);
  return answer;
}

// 5,7, 18, 20, 24가 틀림 --> 배열이 오름 차순 or 내림차순 아닐경우 고려 --> 다른 사람이 자기껄 먼저 빌리는 경우 고려시 풀어짐
function solution(n, lost, reserve) {
  lost.sort((a, b) => a - b);
  reserve.sort((a, b) => a - b);
  let answer = n - lost.length;
  for (let i = 0; i < reserve.length; i++) {
    // 자기가 잃어버렸는지 확인
    console.log("i : reserve의 인덱스 " + i + " 해당번호 : " + reserve[i]);
    const sameExist = lost.indexOf(reserve[i]);
    if (sameExist !== -1) {
      lost.splice(sameExist, 1);
      answer++;
      continue;
    }

    // 자기보다 번호 1작은 사람 확인
    if (reserve[i] > 1) {
      const index = lost.indexOf(reserve[i] - 1);

      if (index !== -1) {
        lost.splice(index, 1);
        answer++;
        continue;
      }
    }

    //자기보다 번호 1 큰 사람 확인
    if (reserve[i] < n) {
      const index = lost.indexOf(reserve[i] + 1);

      if (index !== -1 && reserve[i + 1] !== reserve[i] + 1) {
        lost.splice(index, 1);
        answer++;
        continue;
      }
    }
  }
  console.log(answer);
  return answer;
}

// solution(5, [2, 4], [1, 3, 5]);

// solution(5, [2, 4], [3]);
// solution(3, [3], [1]);
// solution(5, [2, 3, 5], [2, 3, 4]);
// solution(30, [2, 3, 4, 5, 7, 8, 9, 10, 12, 13, 14, 16, 17, 18], [2, 3, 4, 6, 8, 9, 10, 12, 13, 17, 18]);
// solution(5, [2, 4], [2]);
// solution(5, [2, 4], [1, 3, 5]);
// solution(5, [2, 4], [1, 2, 3, 5]);
solution(5, [4, 5], [3, 4]);
//gpt가 풀어줌 왜 틀렸는지 물어보니
function solution2(n, lost, reserve) {
  let students = new Array(n).fill(1); // 모든 학생들에게 체육복이 있다고 가정

  // 여벌의 체육복이 있는 학생 처리
  for (const r of reserve) {
    students[r - 1] += 1;
  }

  // 체육복을 도난당한 학생 처리
  for (const l of lost) {
    students[l - 1] -= 1;
  }

  // 체육복을 빌려줄 수 있는 경우 처리
  for (let i = 0; i < n; i++) {
    if (students[i] === 0) {
      if (i > 0 && students[i - 1] === 2) {
        students[i] = 1;
        students[i - 1] = 1;
      } else if (i < n - 1 && students[i + 1] === 2) {
        students[i] = 1;
        students[i + 1] = 1;
      }
    }
  }

  // 체육수업을 들을 수 있는 학생 수 계산
  const answer = students.filter((s) => s > 0).length;

  return answer;
}
