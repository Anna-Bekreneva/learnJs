const isEmpty = (obj) => {
    if (Object.keys(obj).length) {
        return false
    } else {
        return true
    }
}

let schedule = {};

console.log(isEmpty(schedule)); // true

schedule["8:30"] = "get up";

console.log(isEmpty(schedule)); // false