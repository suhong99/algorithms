import sys, os
base = os.path.dirname(__file__)
sys.stdin = open(os.path.join(base, "input.txt"), "rt")

num, m = input().split()
m = int(m)
stack = []

for digit in num:
    while m > 0 and stack and stack[-1] < digit:
        stack.pop()
        m -= 1
    stack.append(digit)

# 아직 제거해야 할 게 남아있으면 뒤에서 자름
if m > 0:
    stack = stack[:-m]

print("".join(stack))