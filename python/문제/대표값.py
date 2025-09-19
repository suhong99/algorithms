import sys, os
base = os.path.dirname(__file__)
sys.stdin = open(os.path.join(base, "input.txt"), "rt")

n = int(input())
input = list(map(int, input().split()))
ave = round(sum(input)/n)
min = 21470000000
for idx, x in enumerate(input):
    tmp= abs(x-ave)
    if tmp < min:
        min= tmp
        score=x
        res= idx+1
    elif tmp==min:
        if x>score:
            score=x
            res = idx+1
print(ave, res)

# 파이썬에서 round 는 정확히 가운데 0.5이면 짝수쪽으로 간다.
