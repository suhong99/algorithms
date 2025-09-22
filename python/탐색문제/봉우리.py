import sys, os
base = os.path.dirname(__file__)
sys.stdin = open(os.path.join(base, "input.txt"), "rt")

n= int(input())
a=[list(map(int,input().split())) for _ in range(n)]
answer =0
for i in range(n):
    for j in range(n):
        if i!=0 : 
            if a[i][j]< a[i-1][j]: continue
        if i!=n-1 :
            if a[i][j] < a[i+1][j]: continue
        if j!=0 : 
            if a[i][j]< a[i][j-1]: continue
        if j!=n-1 :
            if a[i][j] < a[i][j+1]: continue
        answer +=1

print(answer)