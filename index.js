let userName = prompt('What is your name?');
let userAge = prompt('How old are you?');
let firstNumber = +prompt('Enter first number');
let secondNumber = +prompt('Enter second number')

if (userName && userAge && firstNumber && secondNumber) {
    alert('Your name '+ userName + '. '  + 'Your age '+ userAge + '. '  + 'Sum of numbers ' + ( firstNumber + secondNumber) + '. ');
} else {
    alert('ERROR')
}



