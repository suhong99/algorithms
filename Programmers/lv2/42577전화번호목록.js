// 접두어인지 확인하려면 전화번호는 숫자니깐 sort로 정렬하면  앞자릿 수 기준으로 정렬됨.
function solution(phone_book) {
	phone_book.sort();

	for (let i = 0; i < phone_book.length - 1; i++) {
		if (phone_book[i + 1].startsWith(phone_book[i])) {
			return false;
		}
	}

	return true;
}

console.log(solution(['119', '97674223', '1195524421']));
