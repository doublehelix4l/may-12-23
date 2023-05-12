

function isTruthy(val) {
    if (typeof val === 'string') {
        console.log("True")
    }
    if (val === false) {
        console.log("The boolean value false is falsy")
    }
    if (val === null) {
        console.log("The null value is falsy")
    }
    if (val === undefined) {
        console.log("undefined is falsy")
    }
    if (val === 0) {
        console.log("The number 0 is falsy (the only falsy number)")
    }
    if (val === "") {
        console.log("The empty string is falsy (the only falsy string)")
    }
    else {
        console.log("unexpected error")
    }
}

isTruthy("I am a string")
isTruthy(false)
isTruthy(null)
isTruthy(undefined)
isTruthy(0)
isTruthy("")


function numerLine(num1, num2) {
    if (num1 + num2 < -1000) {
        let sum = num1 + num2
        console.log(sum + " is less than -1000")
    }
    else if (num1 + num2 < 0) {
        let sum = num1 + num2
        console.log(sum + " is a negative number")
    }
    else if (num1 + num2 == 0) {
        let sum = num1 + num2
        console.log(sum + " is equal to 0")
    }
    else if (num1 + num2 > 0 && num1 + num2 < 99) {
        let sum = num1 + num2
        console.log(sum + " is larger than 0")
    }
    else if (num1 + num2 > 100) {
        let sum = num1 + num2
        console.log(sum + " is greater than 100")
    }
    else {
        console.log("unexpected error")
    }
}

numerLine(50, 51)
numerLine(99, -2)
numerLine(0, 101)
numerLine(500, -500)
numerLine(-1000, 0)
numerLine(-5, 0)


function greaterThanOrEqualTo5(num1, num2) {
    if (num1 >= 5 && num2 >= 5) {
        console.log("true")
    }
    else {
        console.log("false")
    }
}

greaterThanOrEqualTo5(5, 6)
greaterThanOrEqualTo5(10, 11)
greaterThanOrEqualTo5(0, 0)
greaterThanOrEqualTo5(1000, -100)
greaterThanOrEqualTo5(6, 4)
greaterThanOrEqualTo5(5, 5)

function pairAndCompair(param1A, param1B, param2A, param2B) {
    if (param1A === param1B || param2A === param2B) {
        console.log("True")
    }
    else {
        console.log("False")
    }
}

pairAndCompair("cat", "cat", 6, "6")
pairAndCompair("five", 5, "dog", "dawg")
pairAndCompair(0, false, "horse", "horse")
pairAndCompair("eight", "eight", "ate", "ate")
pairAndCompair(11, "eleven", "four", "for")
pairAndCompair("cake", "cake", "pie", "pie")

