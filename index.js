//returning the max number

function maxNumber(number1,number2){
    if(number1 > number2)
    return number1
    else if (number1<number2)
    return number2
    else
    return 'equal'
}

let number = maxNumber(2,5);
console.log(number)