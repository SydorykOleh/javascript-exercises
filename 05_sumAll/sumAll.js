const sumAll = function(inputNumber1, inputNumber2) {
    let totalSum = 0;
    let number1 = inputNumber1;
    let number2 = inputNumber2;
    
    if (inputNumber1 > inputNumber2) {    
        number2 = inputNumber1;
        number1 = inputNumber2;
    }

    if (typeof number1 !== 'number' || typeof number2 !== 'number') return "ERROR";
    if (number1 < 0 || number2 < 0) {
        return "ERROR"
    } 


    for (let i = number1; i <= number2; i++) {
        totalSum += i;            
    }

    return totalSum;
};

// Do not edit below this line
module.exports = sumAll;
