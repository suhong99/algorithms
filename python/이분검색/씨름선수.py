import sys,os
base = os.path.dirname(__file__)
sys.stdin = open(os.path.join(base, "input.txt"), "rt")

n= int(input())
body=[]
for i in range(n):
    a,b = map(int,input().split())
    body.append((a,b))
body.sort(reverse=True)
largest=0
cnt=0
for x,y in body:
    if y>largest:
        largest=y
        cnt+=1

print(cnt)