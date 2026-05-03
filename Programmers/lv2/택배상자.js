function solution(order) {
    const stack = [];
    let current = 1; 
    let idx = 0;     
    let count = 0;

    while (current <= order.length) {
        if (current === order[idx]) {
            count++;
            idx++;
        } else {
            stack.push(current);
        }

        while (
            stack.length &&
            stack[stack.length - 1] === order[idx]
        ) {
            stack.pop();
            count++;
            idx++;
        }

        current++;
    }

    return count;
}