let display = document.getElementById("display");
let buttons = Array.from(document.getElementsByClassName("btn"));
let currentInput = '';
let operator = '';
let previousInput = '';

buttons.map(button =>{
    button.addEventListener("click", (e)=>{
        let btnValue = e.target.innerText;

        switch (btnValue){
            case 'C':
            display.innerText = '0';
            currentInput = "";
            previousInput = "";
            operator = '';
            break;
            case '=':
            if (previousInput && currentInput){
                display.innerText = eval(previousInput+ operator + currentInput);
            }
            break;
            case '+':
            case '-':
            case '*':
            case '/':

            operator = btnValue;
            previousInput = currentInput;
            currentInput = '';
            break;
            default:
                currentInput += btnValue;
                display.innerText = currentInput;

        }
    })
})
document.getElementById('btn').addEventListener('click', () => {
    display.innerText = '0';
    currentInput = '';
    previousInput = '';
    operator = '';
});