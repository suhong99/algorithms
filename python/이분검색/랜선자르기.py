import sys,os
base = os.path.dirname(__file__)
sys.stdin = open(os.path.join(base, "input.txt"), "rt")

m,n = map(int, input().split())
Line=[]
res = 0
largest=0
for i in range(m):
    tmp=int(input())
    Line.append(tmp)
    largest=max(largest,tmp)


lt= 1
rt=largest

def Count(len):
    cnt=0
    for x in Line:
        cnt+=(x//len)
    return cnt


while lt<=rt:
    mid=(lt+rt)//2
    if Count(mid)>=n:
        res=mid
        lt=mid+1
    else : 
        rt=mid-1

print(res)