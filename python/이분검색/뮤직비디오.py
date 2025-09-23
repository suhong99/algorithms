import sys,os
base = os.path.dirname(__file__)
sys.stdin = open(os.path.join(base, "input.txt"), "rt")

n,m = map(int, input().split())
music=list(map(int,input().split()))


lt= 1
rt=sum(music)
res = 0
maxx=max(music)

def Count(cap):
    cnt=1
    sum=0
    for x in music:
        if sum+x>cap:
            cnt+=1
            sum=x
        else:
            sum+=x
    return cnt


while lt<=rt:
    mid=(lt+rt)//2
    if mid>maxx and Count(mid)<=m:
        res=mid
        rt=mid-1
    else : 
        lt= mid+1

print(res)