function solution(dartResult) {
  let index = 0;
  let list = [];

  for (let i = 0; i < dartResult.length; i++) {
    if (dartResult[i] === "S") {
      index++;
      if (dartResult[i - 2] === "1") {
        list.push(10);
        continue;
      }
      list.push(dartResult[i - 1] * 1);
    } else if (dartResult[i] === "D") {
      index++;
      if (dartResult[i - 2] === "1") {
        list.push(100);
        continue;
      }
      list.push(Math.pow(dartResult[i - 1], 2));
    } else if (dartResult[i] === "T") {
      index++;
      if (dartResult[i - 2] === "1") {
        list.push(1000);
        continue;
      }
      list.push(Math.pow(dartResult[i - 1], 3));
    } else if (dartResult[i] === "*") {
      if (index === 3) {
        list[1] = list[1] * 2;
        list[2] = list[2] * 2;
        continue;
      }
      list = list.map((number) => number * 2);
    } else if (dartResult[i] === "#") {
      list[index - 1] = -list[index - 1];
    }
  }
  console.log(list[0]);
  console.log(list[1]);

  console.log(list[2]);

  return list[0] + list[1] + list[2];
}

// solution("1S2D*3T");
// solution("1T2D3D#");
// solution("1D2S#10S");
solution("1D2S3T*");
