import sys, os
base = os.path.dirname(__file__)
sys.stdin = open(os.path.join(base, "input.txt"), "rt")
T= int(input())
for t in range(T):
    n,s,e,k = map(int,input().split())
    a= list(map(int,input().split()))
    a= a[s-1:e]
    a.sort()
    print("#%d %d" %(t+1,a[k-1]))