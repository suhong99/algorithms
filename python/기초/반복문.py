# 반복문 (for , while)


'''

a = range(10)
print(list(a)) # [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

a = range(1,11)
print(list(a)) # [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

# 0~9 까지 한줄씩 출력
for i in range(10):
    print(i)

# 역순으로 하고 싶으면

for i in range(10, 0 ,-1) :  # 10 9 ~~ 1 줄바꿈하며
    print(i)

'''


# while로 1~10 출력

i =1
while i<=10 :
    print(i)
    i= i+1


# break로 반복문 탈출
i=1
while True:
    print(i)
    if i==10:
        break
    i+=1


# 반복문 내 continue (홀수만 출력)
for i in range(1,11):
    if i%2==0:
        continue
    print(i)


# for문 break;

for i in range(1,11):
    if i==5:
        break
    print(i)


# for else (반복문이 정상적으로 끝낫을떄 else 실행)
for i in range(1,11):
    print(i)
    if i>15:
        break

else:
    print(11)