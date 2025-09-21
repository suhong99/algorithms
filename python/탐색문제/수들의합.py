import sys, os
base = os.path.dirname(__file__)
sys.stdin = open(os.path.join(base, "input.txt"), "rt")

n,m = map(int, input().split())
a = list(map(int,input().split()))
sum = a[0]
answer=0

left ,right=0,0
while right<n:
    if(sum<m) :
        right+=1
        if right >= n:
            break
        sum+=a[right]
    elif(sum>m):
        sum-=a[left]
        left+=1
    elif(sum==m):
        answer += 1
        sum -= a[left]
        left += 1

print(answer)