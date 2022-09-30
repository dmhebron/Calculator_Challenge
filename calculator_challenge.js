
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
// I was trying to figure out how to call the calculator function but didn't want to change line 53
    return (`${myNum1} ${operator} ${myNum2} = ${total} `);
}


function askUser() {

    const operator = prompt('Enter operator ( either +, -, * or / ): ');

// take the operand input
    const number1 = parseFloat(prompt('Enter first number: '));
    const number2 = parseFloat(prompt('Enter second number: '));

    //insert code here to call the calulator function only if both values are numbers, and the operator is +, -, *, /
    let num1 = Number (prompt ("Please enter a number"));
    let num2 = Number (prompt ("Please enter another number"));
    let operator = prompt ("Please enter an operator");
    // Addtion Function
    let add = function (num2, num1) {
        return num2 + num1;
    };
    
    // Subtraction Function
    let subtract = function (num2, num1)  {
        return num2 - num1;
    };
    
    // Multiplication Function 
    let multiply = function (num2, num1)  {
        return num2 * num1;
    };
    
    // Division Function
    let divide = function (num2, num1) {
        return num2 / num1;
    };
    
    let calculator = function (operator, num2, num1){
        if (operator == "+"){
            return add(num2, num1);
        } else if (operator == "-"){
            return subtract(num2 - num1);
        }else if (operator == "*"){
            return multiply(num2 * num1);
        }else if (operator == "/"){
            return divide (num2 / num1);
        }else {
            alert ("Please try again!");
        }
    };

   console.log(calculator(number1,number2,operator)); 
   //End of insert code for calling calculator

}

askUser()