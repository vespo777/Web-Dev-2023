n = int(input())
a = [int(i) for i in input().split()]

flag = False

for i in range(1, n):
    if (a[i] * a[i - 1] > 0):
        flag = True
        break


if (flag):
    print("YES")
else:
    print("NO")