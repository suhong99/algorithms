import sys, os
base = os.path.dirname(__file__)
sys.stdin = open(os.path.join(base, "input.txt"), "rt")

n = int(input())
numbers = list(map(int,input().split()))
max = -100
def digit_sum(x):
    sum=0
    while x>0:
        sum+=x%10
        x= x//10
    return sum

for i in numbers :
    tot = digit_sum(i)
    if tot>max:
        max= tot
        res= i


print(res)
