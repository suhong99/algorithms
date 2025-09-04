import sys
sys.stdin = open("input.txt", "r")

T = int(input())
# 여러개의 테스트 케이스가 주어지므로, 각각을 처리합니다.

for t in range(1, T + 1):
    numbers = list(map(int, input().split()))  # 다음 줄 입력
    odd_sum = sum(n for n in numbers if n % 2 == 1)
    print(f"#{t} {odd_sum}")
