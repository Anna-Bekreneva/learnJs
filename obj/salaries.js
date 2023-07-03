let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130
}

let allSalaries = 0;

for (key in salaries) {
    allSalaries += salaries[key]
}

console.log(allSalaries)

