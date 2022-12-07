//  Spread operator - Converts array to individual values
function sumOne(a, b) {
    return a+b
}

arr = [5, 4]
console.log(sumOne(...arr))

// Rest operator - Converts individual values to array
function calSum(a, b, ...args) {
    let multi = a*b
    let sum = 0
    for (const arg of args) {
        sum += arg
    }
    return [multi, sum]
}

console.log(calSum(3, 7, 34, 2))