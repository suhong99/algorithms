"""
## 변수명

1. 영문사 숫자, \_로 이루어짐
2. 대소문ㅁ자를 구분한다.
3. 문자나, \_로 시작한다.
4. 특수문자 사용하면 안된다.
5. 키워드를 사용하면 안된다.

"""

"""
## 기타

1. #으로 한줄 주석처리
2. 재할당 시 기존값을 지움
"""


## 값 교환

a, b = 10 ,20
print(a,b)

a,b=b,a

print(a,b)

# 변수타입
a =12345
print(type(a))  # <class 'int'>

a= 12.12345614234125

print(type(a)) # <class 'float'>

a='student'
print(type(a), a) # <class 'str'> student

# 출력 방식

a,b = 1,2
print(a,b) # 1 2
 
 # sep를 통해 출력간의 문자 수정 (기본값 띄워쓰기)
print (a,b,sep="") # 12
print(a,b , sep='\n') # 줄 바꿔 1 2

# end = 띄워쓰기 뒤에 기본 줄바꿈 값 변경
print(a, end=' ')
print(b, end=' ')