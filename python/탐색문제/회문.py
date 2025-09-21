import sys, os
base = os.path.dirname(__file__)
sys.stdin = open(os.path.join(base, "input.txt"), "rt")
n = int(input())
for i in range(n):
    s= input()
    s=s.upper()
    size= len(s)
    for j in range(size//2):
        # if s[j] != s[-1-j]:
        if s!=s[::-1]:  #  뒤집힌 문자열과 같지 않다면
            print("#%d NO" %(i+1))
            break
    else :
            print("#%d YES" %(i+1))
