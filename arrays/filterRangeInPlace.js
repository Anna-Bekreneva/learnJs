const filterRangeInPlace = (arr, a, b) => {
    if (!Array.isArray(arr) || typeof a !== 'number' || typeof b !== 'number') throw new Error('Erorr occured')

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > a && arr[i] < b) return
        arr.splice(arr.findIndex(item => item === arr[i]), 1)
    }
}

let arr = [5, 3, 8, 1];

console.log(filterRangeInPlace(arr, 1, 4)) // удалены числа вне диапазона 1..4

console.log(arr); // [3, 1]