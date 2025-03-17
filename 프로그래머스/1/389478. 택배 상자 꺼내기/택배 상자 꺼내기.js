function solution(n, w, num) { 
    let answer = 0;
    while (num <= n) {
        num += 2 * (w - ((num - 1) % w) - 1) + 1;
        answer ++;
    }
    return answer;
}