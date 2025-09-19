import sys, os
base = os.path.dirname(__file__)
sys.stdin = open(os.path.join(base, "input.txt"), "rt")
n, m = map(int, input().split())

cnt=[0]*(n+m+1)
max = -100
for  i in range(1,n):
    for j in range(1,m):
        cnt[i+j]+=1

for i in range(n+1):
    if cnt[i]> max:
        max = cnt[i]

for i in range(n+m+1):
    if cnt[i]==max:
        print(i, end= " ")
