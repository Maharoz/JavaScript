//Divisible by 3 => Fizz
//Divisible by 5 => Buzz
//Divisible by both 3 and 5 =>FizzBuzz
//Not divisible by 3 or 5 => input
//Not a number =>'Not a number

const output = fizzBuzz(16);
console.log(output);

function fizzBuzz(number){
    if (typeof (number) !== 'number')
    return 'not a number'

    else if ( number % 3 == 0 && number % 5 == 0)
        return 'FizzBuzz'

    if( number % 3 === 0)
        return 'fizz'
    else if (number % 5 === 0 )
        return 'buzz'

       return number

      

}