function binarySearch(arr, target) {
    let leftIndex = 0;
    let rightIndex = arr.length - 1;

    while (leftIndex <= rightIndex) {
        let middleIndex = Math.floor((leftIndex + rightIndex) / 2)
        if (target === arr[middleIndex]) {
            return middleIndex;
        }
        if (target < arr[middleIndex]) {
            rightIndex = middleIndex - 1;
        } else {
            leftIndex = middleIndex + 1
        }
    }
    return -1;
}

const array = [-10, -9, -5, -3, -2, -1, 1, 4, 7, 10, 11, 15, 18, 21]

console.log(`10: ${binarySearch(array, 10)}`)
console.log(`-10: ${binarySearch(array, -10)}`)
console.log(`4: ${binarySearch(array, 4)}`)
console.log(`-4: ${binarySearch(array, -4)}`)