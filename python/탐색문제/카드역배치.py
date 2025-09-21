import sys, os
base = os.path.dirname(__file__)
sys.stdin = open(os.path.join(base, "input.txt"), "rt")

# 숫자 0~21
a= list(range(21))

# 총 10번 교환이 진행됨
for j in range(10):
    s, e = map(int, input().split())
    for i in range((e-s+1)//2):
        print((e-s+1)//2, s, e, j )
        a[s+i], a[e-i] = a[e-i], a[s+i]
a.pop(0)
for x in a:
    print(x, end=' ')
