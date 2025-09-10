'''
변수 입력과 연산자

'''


# a= input('숫자를 입력하세요: ')
# print(a)


# 2개 입력받기

a,b = input('숫자 입력해주세요 : ').split()  # 2 3    이렇게 a b 입력하면 split해서 할당
print(a,b) # 이떄 타입은 str


a= int(a) # 이렇게 입력값을 형변환 가능
print(a) 

# 동시에 두 가지 형변환하기 
# https://www.w3schools.com/python/ref_func_map.asp

a,b = map(int,input('숫자 입력해주세요 : ').split())


# 연산자
a,b = 3,2

a+b # 5
a-b # 1
a*b # 6
a/b # 1.5
a//b # 1 (몫)
a%b # 2 (나머지 )
a**b # 9 (거듭제곱)


a= 4.3
b= 5
c = a+b
print(type(c)) # float (실수)