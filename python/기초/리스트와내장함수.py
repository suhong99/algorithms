# 리스트와 내장함수

import random as r

# 리스트 생성 
a = [1,2,3,4,5]
# print(a)
b= list()
# print(b , 'b')

# print(a[0])

b= list(range(1,11))
# print(b)

c= a+b # 리스트끼리 더해짐
# print(c)

a.append(6)
print(a) # [1, 2, 3, 4, 5, 6]
print(a.append(7)) # 반환값은 None
a.insert(3,7) # 3번 인덱스에 7 삽입
# print(a) # [1, 2, 3, 7, 4, 5, 6, 7]
a.pop() # 마지막 인덱스값 제거
a.pop(4) # 4번 인덱스값 제거
# print(a)
a.remove(7) # 4라는 값 제거 없는 값 제거시  ValueError: list.remove(x): x not in list 발생
a.index(5) # 5라는 값의 index 

# print(sum(a)) # a리스트 값의 합
max(a) # 리스트 중 가장 큰 값
min(a) # 리스트 중 가장 작은 값
# print(min(7,5)) # 인자값중 최솟값 # 5

# print(a)
r.shuffle(a) # 값을 무작위로 섞기
# print(a)

a.sort()
# print(a) # [1, 2, 3, 5, 6]
a.sort(reverse=True) # 역순
# print(a) # [6, 5, 3, 2, 1]
a.clear() # 리스트 비우기
# print(a)


# 리스트와 내장함수2

a=[23,12,36,53,19]
print(a[:3])  # [23, 12, 36] 3가지
print(a[1:4]) #  [12, 36, 53]
print(len(a)) # 5

for i in range(len(a)):
    print(a[i], end=' ')
else :
    print()
for x in a:
    print(x, end=' ')
else :
    print()


for x in enumerate(a):
    print(x)  # 인덱스와 값을 튜플형태로 반환함

for x in enumerate(a):
    print(x[0], x[1], end=" ")  # 인덱스와 값을 튜플형태로 반환함
else :
    print()

for i,v in enumerate(a):
    print(i,v,  end=" ")  # 인덱스와 값을 튜플형태로 반환함
else :
    print()

b = (1,2,3,4,5) # 튜플
print(b) 
c = [1,2,3,4,5]
print(c)
c[0] = 7 # 수정이 됨
print(c)

# b[0]=7 # 에러발생 
# print(b) # TypeError: 'tuple' object does not support item assignment      

if all(50>x for x in a): # a안에 있는 x값들에 대해서 모두 만족한다면
    print(x, "yes")  # 마지막에 가서 출력되네
else :
    print( x,"no") # 이것도 틀린 시점이 아니라 마지막가서 출력됨



if any(10>x for x in a): # a안에 있는 x값들에 대해서 한번이라도  만족한다면
    print(x, "yes")  # 마지막에 가서 출력되네
else :
    print( x,"no") # 마지막에 가서 출력되네