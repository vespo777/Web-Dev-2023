n = int(input())
a = [int(i) for i in input().split()]

for i in range(n):
    if (a[i] > 0):
        print(a[i], end=" ")