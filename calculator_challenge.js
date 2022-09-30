
function add (num1, num2) {
    return num1 + num1;
}

//update the sub function
function sub(num1, num2){
return num1 - num2;
}

//update the multiply function
function multiply(num1, num2){
num1 * num2;
}

//update the divide function
function divide(num1, num2){
return num1 / num2;
}


function calculator (myNum1, myNum2, operator) {
    let total = 0;
    //insert code here to call the add function if the operator is "+"
if (operator == "+") {
console.log (total = myNum1 + myNum2);
}
    //End of insert code add

    //insert code here to call the sub function if the operator is "-"
else if (operator == "-") {
    console.log (total = myNum1 - myNum2);
}
    //End of insert code substract


    //insert code here to call the multiply function if the operator is "*"
else if (operator == "*"){
    console.log (total = myNum1 * myNum2);
}
    //End of insert code multiply

    //insert code here to call the divide function if the operator is "/"
    else if (operator == "/"){
        console.log (total = myNum1 / myNum2);
    }
    //End of insert code divide
    
else {
    return "Invalid Entry";
}

    return (`${myNum1} ${operator} ${myNum2} = ${total} `);
}


function askUser() {

    const operator = prompt('Enter operator ( either +, -, * or / ): ');

// take the operand input
    const number1 = parseFloat(prompt('Enter first number: '));
    const number2 = parseFloat(prompt('Enter second number: '));

    //insert code here to call the calulator function only if both values are numbers, and the operator is +, -, *, /


   console.log(calculator(number1,number2,operator)); 
   //End of insert code for calling calculator

}

askUser()