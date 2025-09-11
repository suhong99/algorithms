# 문자열과 내장함수

msg = 'It is time'
print(msg.upper())  # 원본 대문자화
print(msg) # 원본 유지
print(msg.lower()) # 소문자
tmp = msg.upper()
print(tmp)
print(tmp.find('T')) # T 문자의 가장 가까운 인덱스
print(tmp.count('T')) # T의 개수
print(tmp.count('IT')) 



print(msg) # It is time
print(msg[:2]) #  인덱스 2번전까지 출력
print(msg[3:5])  # 3번부터 5번짜기 is
print(len(msg)) # 문자길이 10

for i in range(len(msg)):
    print(msg[i], end=' ') # 그대로 출력됨
print() # 줄바꿈

for x in msg:  # msg의 각각의 문자에 대해서
    print(x, end=' ') # I t   i s   t i m e
else : print()        


for x in msg: 
    if x.isupper(): # 대문자인경우 출력
        print(x, end=" ")
else : print()        

for x in msg: 
    if x.islower(): # 대문자인경우 출력
        print(x, end=" ")
else : print()        

tmp = 'AZ'
for x in tmp:
    print(ord(x))  # 아스키코드 출력 함수

for x in tmp.lower():
    print(ord(x)) 

# 97
# 122

