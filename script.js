const number1 = document.getElementById('number1');
const number2 = document.getElementById('number2');
const number3 = document.getElementById('number3');
const calcanswer = document.getElementById('calcanswer');
const oeanswer = document.getElementById('oeanswer');


function add() {
    let n1 = parseInt(number1.value);
    let n2 = parseInt(number2.value);
    
    if (isNaN(n1)) {
        number1.classList.add("error");
    } else {
        number1.classList.remove("error");
    }

    if (isNaN(n2)) {
        number2.classList.add("error");
    } else {
        number2.classList.remove("error");
    }

    if (!isNaN(n1) && !isNaN(n2)) {
        let answer = n1 + n2;
        calcanswer.textContent = answer;
        calcanswer.classList.remove("error"); 
    }
}

function multiply(){
    let n1 = parseInt(number1.value);
    let n2 = parseInt(number2.value);
    
    if (isNaN(n1)) {
        number1.classList.add("error");
    } else {
        number1.classList.remove("error");
    }

    if (isNaN(n2)) {
        number2.classList.add("error");
    } else {
        number2.classList.remove("error");
    }

    if (!isNaN(n1) && !isNaN(n2)) {
        let answer = n1 * n2;
        calcanswer.textContent = answer; 
        calcanswer.classList.remove("error");
    }
}

function oddeven(){
    let i = parseInt(number3.value)
    if(i & 1)
{
    console.log("ODD")
    oeanswer.innerText = "Odd"
}
else
{
    console.log("EVEN")
    oeanswer.innerText = "Even"
}
}
