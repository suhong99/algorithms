import sys, os
base = os.path.dirname(__file__)
sys.stdin = open(os.path.join(base, "input.txt"), "rt")

n = int(input())

a = list(False for _ in range(n+1))

cnt=0
for i in range(2,n+1):
    if not a[i] :
        cnt+=1
        for j in range(i,n+1,i):
            a[j]= True

print(cnt)