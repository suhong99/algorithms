import sys,os
base = os.path.dirname(__file__)
sys.stdin = open(os.path.join(base, "input.txt"), "rt")

n = int(input())
nums = list(map(int,input().split()))

lt =0
rt = n-1
last =0
res=""
tmp=[]
while lt<=rt:
    if nums[lt] >last:
        tmp.append((nums[lt],"L"))
    if nums[rt]>last:
        tmp.append((nums[rt],'R'))
    tmp.sort()
    if len(tmp) ==0:
        break
    else :
        res = res+tmp[0][1]
        last =tmp[0][0]
        if tmp[0][1]=="L":
            lt+=1
        else:
            rt-=1
    tmp.clear()

print(len(res))
print(res)