import sys, os
base = os.path.dirname(__file__)
sys.stdin = open(os.path.join(base, "input.txt"), "rt")
n = int(input())
res = 0
for i in range(n):
    values = input().split()
    values.sort()
    a, b, c =map(int, values)
    if a==b and b==c:
        money= 10000+ 1000*a
    elif a==b or b==c:
        money = 1000+ 100*b
    else :
        money = 100*c
    if money>res:
        res = money

print(res)


    

        