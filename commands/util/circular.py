ar = [4,1,2,1,3,1]
ar2 = 6*[-1]
ar4 = ar
ar3 = ar + ar4

for i in range (0, len(ar)):
    for j in range(i, len(ar3)-1):
        if (ar[i] < ar3[j]):
            ar2[i] = ar3[j]
            break
print (ar2)


    