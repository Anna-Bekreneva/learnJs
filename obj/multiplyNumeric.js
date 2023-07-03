let menu = {
    width: 200,
    height: 300,
    title: "My menu"
};

const multiplyNumeric = (obj) => {
    const properties = []
    for (let key in obj) {
        if (typeof obj[key] === 'number') {
            properties.push(key)
        }
    }

    if (properties.length) {
        for (let i = 0; i < properties.length; i++) {
            obj[properties[i]] = obj[properties[i]] * 2
        }
    }
}

multiplyNumeric(menu)
console.log(menu)

// после вызова функции
menu = {
    width: 400,
    height: 600,
    title: "My menu"
};