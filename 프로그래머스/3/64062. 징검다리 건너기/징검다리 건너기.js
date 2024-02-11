function solution(stones, k) {
    stones.push(Infinity);
    let stack = [{count: Infinity, idx: -1}];
    let answer = Infinity;
    for (let i = 0; i < stones.length; i++) {
        const right = { count: stones[i], idx: i };
        while (stack[stack.length - 1].count < right.count) {
            const mid = stack.pop();
            const left = stack[stack.length - 1];
            if (right.idx - left.idx > k) {
                answer = Math.min(answer, mid.count);
            }
        }
        stack.push(right);
    }
    return answer;
}