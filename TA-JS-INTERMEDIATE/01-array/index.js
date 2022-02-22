// // __nomor 1__

const arr = [1, 2, 3];
const arr2 = [8, 1, 5, 7];

function reverse(arr) {
    let reverseArr = [];
    let reverseNumber = " ";
    for (let i = arr.length; i--;){
        reverseNumber += arr[i];
        reverseArr.push(arr[i])
    }
    return reverseArr;
}

const newArr = reverse(arr);
const newArr2 = reverse(arr2);

console.log(arr, newArr);
console.log(arr2, newArr2);

// // // __nomor 2__

const arr1 = [1, 3, 4, 1, 2, 8];
const arr3 = [5, 6, 7, 8, 1, 3];

function getAverage(arr1) {
    let sum = 0;
    let counter = 0;
    for (let i = 0; i < arr1.length; i++) {
        sum += arr1[i];
    }

    let avg = sum / arr1.length;
    for (let j = 0; j < arr1.length; j++) {
        if (arr1[j] > avg) {
            counter++;
        }
    }
    return counter;
}

console.log(getAverage(arr1))
console.log(getAverage(arr3))

// // __nomor 3__

const arr4 = [
    [10],
    [9, 7, 1],
    [2, 8],
];

function searchInArray(arr4, num) {
    let tempArr = [];
    for (let i = 0; i < arr4.length; i++) {
        let number = arr4[i];
        for (let j = 0; j < number.length; j++) {
            tempArr.push(number[j]);
        }
    }

    for (let k = 0; k < tempArr.length; k++) {
        if (tempArr[k] === num) {
            var found = true;
            var index = k;
        }
    }

    if (found) {
        return index;
    } else {
        return 'null';
    }
}

console.log(searchInArray(arr4, 3));
console.log(searchInArray(arr4, 2));
console.log(searchInArray(arr4, 4));
console.log(searchInArray(arr4, 8));