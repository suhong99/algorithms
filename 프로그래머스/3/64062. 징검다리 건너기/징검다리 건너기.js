
2
3
4
5
6
7
8
9
10
11
12
13
14
15
16
17
18
19
20
21
22
23
function solution(stones, k) {
    // 이분탐색을 사용한다.
    let left = 1;
    let right = 200000000;

    while(left <= right) {
        const mid = (left + right) / 2 >> 0;

        let count = 0;
        for(let i = 0; i < stones.length; i++) {
            if(stones[i] - mid <= 0) count++;
            else count = 0;

            if(count === k) break;
        }

        if(count === k) right = mid - 1;
        else left = mid + 1;
    }

    return left;
}
