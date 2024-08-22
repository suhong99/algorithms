function solution(n) {
  const pibonachi = [0, 1, 1, 2, 3, 5, 8, 13];
  for (let i = 7; i < n; i++) {
    pibonachi.push((pibonachi[i - 1] + pibonachi[i]) % 1234567);
  }
  return pibonachi[n];
}
