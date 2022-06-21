let num1 = prompt('enter the first number'),
num2 = prompt('enter the second number'),
ops = prompt('enter operation')

let val1 = parseInt(num1)
let val2 = parseInt(num2)

let ans = eval(`${num1}${ops}${num2}`)
document.write(ans)