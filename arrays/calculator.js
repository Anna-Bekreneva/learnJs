function Calculator() {
    this.methods = {
        "+": (a, b) => a + b,
        "-": (a, b) => a - b
    }

    this.calculate = function(str) {
        const array = str.split(' ')
        if (array.length !== 3) throw new Error('Error occurred')

        const operator = array[1]
        const thirstNumber = Number(array[0])
        const secondNumber = Number(array[2])

        return this.methods[operator](thirstNumber, secondNumber)
    }

    this.addMethod = function(name, func) {
        this.methods[name] = func
    }
}

let calc = new Calculator;

console.log(calc.calculate("3 + 7")); // 10

let powerCalc = new Calculator;

powerCalc.addMethod("*", (a, b) => a * b);
powerCalc.addMethod("/", (a, b) => a / b);
powerCalc.addMethod("**", (a, b) => a ** b);

let result = powerCalc.calculate("2 ** 3");
console.log(result); // 8