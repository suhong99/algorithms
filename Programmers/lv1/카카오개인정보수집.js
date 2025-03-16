// https://school.programmers.co.kr/learn/courses/30/lessons/150370

function solution(today, terms, privacies) {
  const dateToDays = (date) => {
    let [year, month, day] = date.split('.').map(Number);
    return year * 12 * 28 + month * 28 + day;
  };

  const todayDays = dateToDays(today);

  const termMap = new Map();
  terms.forEach((term) => {
    let [type, months] = term.split(' ');
    termMap.set(type, Number(months));
  });

  const result = [];

  privacies.forEach((privacy, index) => {
    let [date, type] = privacy.split(' ');
    let expiryDate = dateToDays(date) + termMap.get(type) * 28 - 1;

    if (expiryDate < todayDays) {
      result.push(index + 1);
    }
  });

  return result;
}
