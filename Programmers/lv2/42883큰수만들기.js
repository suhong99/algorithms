function solution(number, k) {
    const stack = [];

    for (let num of number) {

        // 뒤 숫자가 더 크면 앞 숫자 제거
        while (
            k > 0 &&
            stack.length &&
            stack[stack.length - 1] < num
        ) {
            stack.pop();
            k--;
        }

        stack.push(num);
    }

    // 제거 횟수 남았으면 뒤에서 제거
    return stack.slice(0, stack.length - k).join('');
}