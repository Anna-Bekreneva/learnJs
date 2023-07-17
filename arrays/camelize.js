const camelize = (str) => {
    if (!str) throw new Error ('string is empty')
    const array = str.split('-')
    let newArray = []
    array.forEach(element => {
        if (element[0]) {
            newArray.push(element[0].toUpperCase() + element.substring(1))
        }
    });
    return newArray.join('')
}

console.log(camelize('background-color'))
console.log(camelize('list-style-image'))
console.log(camelize("-webkit-transition"))

