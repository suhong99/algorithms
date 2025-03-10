function solution(orders, course) {
  const getCombinations = (arr, num) => {
    if (num === 1) return arr.map((el) => [el]);
    let result = [];
    arr.forEach((fixed, index, origin) => {
      const rest = origin.slice(index + 1);
      const combos = getCombinations(rest, num - 1);
      const attached = combos.map((combo) => [fixed, ...combo]);
      result.push(...attached);
    });
    return result;
  };

  let result = [];

  for (let size of course) {
    let comboCount = new Map();

    // 각 주문에서 가능한 조합 생성
    orders.forEach((order) => {
      let sortedOrder = order.split('').sort(); // 알파벳 정렬
      let combinations = getCombinations(sortedOrder, size);

      combinations.forEach((combo) => {
        let key = combo.join('');
        comboCount.set(key, (comboCount.get(key) || 0) + 1); // 존재하면 0+1  아니면 +1
      });
    });

    // 가장 많이 나온 조합 찾기
    let maxCount = 0;
    let candidates = [];
    for (let [key, count] of comboCount.entries()) {
      // 2부터 세트 매뉴임
      if (count >= 2) {
        // 만약 더 높은 수가 나으면 그 메뉴로 변경됨. 하지만 숫자가 같으면 메뉴종류만 늘어남
        if (count > maxCount) {
          maxCount = count;
          candidates = [key];
        } else if (count === maxCount) {
          candidates.push(key);
        }
      }
    }

    result.push(...candidates);
  }

  return result.sort(); // 사전순 정렬 후 반환
}

console.log(
  solution(
    ['ABCFG', 'AC', 'CDE', 'ACDE', 'BCFG', 'ACDEH'],
    [2, 3, 4],
    ['AC', 'ACDE', 'BCFG', 'CDE']
  )
);
