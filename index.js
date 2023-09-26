let modeOn = false;
let view = document.getElementById("view");
let numberOne = ""; 
let numberTwo = "";
let operator = '';
let result = '';

function turnOnOff() {
    if( modeOn === false) {
        view.classList.add("turn-on"); 
        
    }else {
        view.classList.remove("turn-on"); 
    }
    modeOn = !modeOn
}

function eraseValues() {
    numberOne = "";
    numberTwo = "";
    view.innerText = "";
    operator = "";
}


function setValues(number) {
    console.log|(numberOne, numberTwo);

    if( modeOn === false) {
        alert("ligue a calculadora primeiro")
    }else{

        if(numberTwo === '' && operator === '') {
            numberOne += number; console.log(numberOne);
            view.innerText = `${numberOne}`;
            // template literals js
        }

        if(numberOne != '' && operator != '') {
            numberTwo += number; console.log(numberOne);
            view.innerText = `${numberOne}${operator}${numberTwo}` ;
        }

    }
}


function setOperator(paramOperator) {

    if(operator === '') {
        operator = paramOperator;
        view.innerText += operator;
    }
}


function showResult() {
    numberTwo = Number(numberTwo);
    numberOne = Number(numberOne);

    switch(operator) {
        case "+": 
            result = numberOne + numberTwo;
        break

        case "-":
            result = numberOne - numberTwo;
        break
        
        case "*":
            result = numberOne * numberTwo;
        break

        case "/":
            result = numberOne / numberTwo;
        break

        default:
            alert("digite um operador");
    }
    eraseValues();
    view.innerText = result;

}
