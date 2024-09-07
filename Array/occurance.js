const arr = [
    { employeeName: "Ram", employeeId: 23 },
    { employeeName: "Shyam", employeeId: 24 },
    { employeeName: "Ram", employeeId: 21 },
    { employeeName: "Ram", employeeId: 25 },
    { employeeName: "Kisan", employeeId: 22 },
    { employeeName: "Shyam", employeeId: 20 }
];

function findOccurrence(arr, key) {
    const occurrences = {}; 

    arr.forEach(item => {
        const keyValue = item[key];
        if (occurrences[keyValue]) {
            occurrences[keyValue]++;
        } else {
            occurrences[keyValue] = 1;
        }
    });

    return occurrences;
}

const result = findOccurrence(arr, 'employeeName');
console.log(result);
