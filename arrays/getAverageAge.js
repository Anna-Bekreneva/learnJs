let vasya = { name: "Вася", age: 25 };
let petya = { name: "Петя", age: 30 };
let masha = { name: "Маша", age: 29 };

let arr = [vasya, petya, masha];

const getAverageAge = (users) => {
    if (users.length) {
        const allAges = users.map((user) => user.age)
        if (allAges.length) {
            return allAges.reduce((sum, current) => sum + current) / allAges.length
        }
    }
}

console.log(getAverageAge(arr)); // (25 + 30 + 29) / 3 = 28