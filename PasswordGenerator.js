let inputSlider=document.getElementById('inputSlider');
let sliderValue=document.getElementById('sliderValue');
let passBox=document.getElementById('passBox');
let lowercase=document.getElementById('lowercase');
let uppercase=document.getElementById('uppercase');
let numbers=document.getElementById('numbers');
let symbols=document.getElementById('symbols');
let getBtn=document.getElementById('genBtn');
let copyIcon=document.getElementById('copyIcon');


//showing input slider value
sliderValue.textContent=inputSlider.value;
inputSlider.addEventListener('input',()=>{
    sliderValue.textContent=inputSlider.value;
});

genBtn.addEventListener('click',()=>{
    passBox.value=generatePassword();
});

let lowerChars = "abcdefghijklmnopqrstuvwxyz";
let upperChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let allNumbers = "0123456789";
let allSymbols = "~!@#$%^&*";

// Function to generate Password
function generatePassword()
{
    let genPassword="";
    let allChars="";

    allChars  += lowercase.checked ? lowerChars : "";
    allChars  += uppercase.checked ? upperChars : "";
    allChars  += numbers.checked ? allNumbers : "";
    allChars  += symbols.checked ? allSymbols : "";

    if(allChars == "" || allChars.length ==0){
        return genPassword;
    }

    let i=1;
    while(i<=inputSlider.value)
    {
        genPassword=genPassword+allChars.charAt(Math.floor(Math.random()*allChars.length));
        i++;
    }
    return genPassword;
}

copyIcon.addEventListener('click',()=>{
    if(passBox.value != "" || passBox.value.length>=1){
        navigator.clipboard.writeText(passBox.value);
        copyIcon.innerText="check";
        copyIcon.title="Password Copied";

        setTimeout(() => {
            copyIcon.innerHTML="content_copy";
            copyIcon.title="";
        }, 3000);
    }
});

/*

let expression = '';
let input= document.getElementById('inputBox').value;
function appendNumber(number) {
  expression += number;
  input=expression;
}

function appendOperator(operator) {
  expression += operator;
   input=expression;
}

function clearResult() {
  expression = '';
   input=expression;
}

function deleteLastCharacter() {
  expression = expression.slice(0, -1);
   input=expression;
}

function calculateResult() {
  let result = '';
  try {
    result = eval(expression);
  } catch (error) {
    result = 'Error';
  }
  expression = result.toString();
   input=expression;
}

*/

            /*
                In JavaScript, the eval() function is a built-in function that evaluates JavaScript code 
                represented as a string and executes it. It takes a string argument containing JavaScript 
                code and returns the result of the evaluation.

                The primary use of eval() is to dynamically evaluate and execute JavaScript code at runtime. 
                It can be helpful in scenarios where you have a string containing JavaScript code that needs 
                to be executed dynamically.

                e.target.innerHTML:
                When an event occurs, such as a click event In JavaScript, e.target.innerHTML is used to access
                the inner HTML content of the element that triggered an event
            */