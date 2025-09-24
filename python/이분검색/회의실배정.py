import sys,os
base = os.path.dirname(__file__)
sys.stdin = open(os.path.join(base, "input.txt"), "rt")
n= int(input())
meeting=[]
for i in range(n):
    s,e = map(int,input().split())
    meeting.apeend((s,e))

meeting.sort(key=lambda x: (x[1],x[0]))

et=0
cnt=0
for s,e in meeting:
    if s>=et:
        et=e
        cnt+=1

print(cnt)