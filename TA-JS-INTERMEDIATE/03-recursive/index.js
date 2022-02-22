// __nomor 1__
const arr1 = [1, 2, 3, 4, 5];
const arr2 = [0, 3, 1, 10, 22];
function sumOfArray(arr) {
    let dupArr = [...arr];
    let sum = dupArr[0];
    if (dupArr.length === 1){
        return sum;
    }
    sum += dupArr[1];
    dupArr.shift();
    dupArr[0] = sum;
    let value = sumOfArray(dupArr);
    return value;
}

console.log(sumOfArray(arr1));
console.log(sumOfArray(arr2));

// __nomor 2__
const avg1 = [1, 2, 3, 4, 5];
const avg2 = [0, 3, 1, 10, 22];

function countAvg(arr) {
    sum = sumOfArray(arr);
    length = arr.length;
        return sum / length;
}

function countAboveAvg(arr, avg) {
    let checkArr = arr[0] > avg;
    if (arr.length === 1) {
        return checkArr;
    }
    arr.shift();
    return checkArr + countAboveAvg(arr, avg);
}

const totalAboveAvg1 = countAboveAvg(arr1, avg1);
const totalAboveAvg2 = countAboveAvg(arr2, avg2);

console.log(totalAboveAvg1);
console.log(totalAboveAvg2);

