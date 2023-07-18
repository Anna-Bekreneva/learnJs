const filterRange = (arr, a, b) => {
    if (!Array.isArray(arr) || typeof a !== 'number' || typeof b !== 'number') throw new Error('Erorr occured')

    return arr.filter(element => element >= a && element <= b)
}

const arr = [5, 3, 8, 1];
const filtered = filterRange(arr, 1, 4);
console.log(filtered); // 3,1 (совпадающие значения)
console.log(arr); // 5,3,8,1 (без изменений)