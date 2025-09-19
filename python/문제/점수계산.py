import sys, os
base = os.path.dirname(__file__)
sys.stdin = open(os.path.join(base, "input.txt"), "rt")

n = int(input())
stack = 0

answer = 0
list = map(int, input().split())

for i in list:
    if i == 1 :
        stack = stack+1
        answer += stack
    elif i==0 :
        stack=0

