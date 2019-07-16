def sequential_numbers(n, length=2):
    start = 0
    numbers = list(range(n))
    for i in range((n // 2) + 1):
        s = sum(numbers[start:start+length])
        if i == 0 and s > n:
            return False
        if s < n:
            start += 1
            continue
        elif s == n:
            return True
        else:
            return sequential_numbers(n, length=length + 1)


for num in range(10, 2049):
    if not sequential_numbers(num):
        print(num)
