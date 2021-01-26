function addNumbers(num1, num2){
    console.log(arguments);
    var sum = 0;
    for (let i = 0; i < arguments.length; i++) {
        sum = sum + arguments[i];
    }
    return sum;
    //return num1 + num2;
}

var result = addNumbers(6, 9, 5, 8, 10, 55);
console.log(`Output = ${result}`);