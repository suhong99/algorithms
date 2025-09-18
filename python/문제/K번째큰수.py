import sys, os
# base = os.path.dirname(__file__)
# sys.stdin = open(os.path.join(base, "input.txt"), "rt")
N,K = map(int,(input().split(" ")))
numbers = list(map(int, input().split(" ")))
res= set()

for i in range(N):
    for j in range(i+1,N) :
        for m in range(j+1,N):
            res.add(numbers[i]+numbers[j]+numbers[m])

res=list(res)
res.sort(reverse=True)
print(res[K-1])