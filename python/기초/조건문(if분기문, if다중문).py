# 조건문 if(분기 중첩)

'''
x= 7


if x==7 :
    print("Lucky") # 파이썬은 들여쓰기도 문법 (들여쓰기가 잘못되도 에러가 생김)

if x!=7 :
    print("부정은 !=")    
     

if type(x)== int:
    if x==7 :
        print("2중")

'''

# 관계 연산자

'''
x =9
if x>7 :
    print('크다')


if x>7 and x<10 :
    print('교집합')

if 0<x<10 :
    print("이렇게도 됨")

'''


# else문
x= 10
if x >0 :
    print("양수")
elif x==0 : 
    print("영")
else :
    print("음수")


