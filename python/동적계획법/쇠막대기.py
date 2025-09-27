import sys, os
base = os.path.dirname(__file__)
sys.stdin = open(os.path.join(base, "input.txt"), "rt")

s = str(input())


stick=0
answer =0
for ch in s:
    if ch == '(':
        stick += 1
    else:  # ')'
        stick -= 1
        if prev == '(':   # 바로 앞이 '(' → 레이저
            answer += stick
        else:             # 막대 끝
            answer += 1
    prev = ch


print(answer)