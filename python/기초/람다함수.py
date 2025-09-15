# 람다함수



def plus_one(x): #일반함수
    return x+1    

plus_two = lambda x: x+2 

print(plus_two(1))


a=[1,2,3]
print(list(map(plus_one,a)))
print(list(map(lambda x: x+1, a))) # 인자로 함수 생성할 떄 람다식 유용함

