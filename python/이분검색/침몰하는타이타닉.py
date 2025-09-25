import sys,os
base = os.path.dirname(__file__)
sys.stdin = open(os.path.join(base, "input.txt"), "rt")

n ,m = map(int, input().split())
boat = list(map(int,input().split()))
boat.sort()
left =0
right = n-1
answer =0
while left<=right :
    answer+=1
    if boat[right]+boat[left]<=m :
        left+=1
        right-=1
    else :
        right-=1

print(answer)