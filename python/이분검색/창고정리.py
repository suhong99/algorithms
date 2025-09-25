import sys,os, heapq
base = os.path.dirname(__file__)
sys.stdin = open(os.path.join(base, "input.txt"), "rt")


l = int(input())
storage = list(map(int,input().split()))
m = int(input())

# 최소 힙, 최대 힙 준비
min_heap = storage[:]
max_heap = [-x for x in storage]  # 음수로 바꿔서 최대힙처럼 사용
print(min_heap, max_heap)

heapq.heapify(min_heap)
heapq.heapify(max_heap)


print(min_heap, max_heap)
for _ in range(m):
    # 최소값, 최대값 꺼내기
    mn = heapq.heappop(min_heap)
    mx = -heapq.heappop(max_heap)

    if mx - mn <= 1:  # 더 줄일 수 없으면 중단
        heapq.heappush(min_heap, mn)
        heapq.heappush(max_heap, -mx)
        break

    # 조정
    mn += 1
    mx -= 1

    # 다시 힙에 넣기
    heapq.heappush(min_heap, mn)
    heapq.heappush(max_heap, -mx)

print(-max_heap[0] - min_heap[0])

# l = int(input())
# storage = list(map(int,input().split()))
# storage.sort()
# m = int(input())

# for _ in range(m):
#     storage[0]+=1
#     storage[l-1]-=1
#     storage.sort()
# print(storage[l-1]-storage[0])
