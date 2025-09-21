# 정렬된걸 활용하면 n 재정렬하면 nlogn

import sys, os
base = os.path.dirname(__file__)
sys.stdin = open(os.path.join(base, "input.txt"), "rt")


n=int(input())
a=list(map(int,input().split()))
m=int(input())
b= list(map(int,input().split()))
p1=p2=0
c=[]
while p1<n and p2<m:
    if a[p1]<=b[p2]:
        c.append(a[p1])
        p1+=1
    else:
        c.append(b[p2])
        p2+=1

if p1<n:
    c=c+a[p1:]
if p2<m:
    c=c+b[p2:]

for x in c:
    print(x, end=" ")