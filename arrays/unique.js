function unique(arr) {
    const newArray = []
    if (arr.length) {
        for (let i = 0; i < arr.length; i++) {
            const element = arr[i]
            if (!newArray.includes(element)) {
                newArray.push(element)
            }
        }
    }
    return newArray
}

let strings = ["кришна", "кришна", "харе", "харе", "харе", "харе", "кришна", "кришна", ":-O"];

console.log(unique(strings)); // кришна, харе, :-O