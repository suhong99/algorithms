# 함수 만들기 def

def add(a,b):
    c= a+b
    print(c)

add(3,2)

def add(a,b):
    c= a+b
    d= a-b
    return c,d

print(add(3,2))


def isPrime(x):
    for i in range(2,x):
        if x%i==0:
            return False
    return True

a= [12,13,15,7,3,5]
for x in a :
    if isPrime(x):
        print(x, end= " ")

        