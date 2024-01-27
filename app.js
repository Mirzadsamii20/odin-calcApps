var buttonElement0 = document.getElementsByClassName("btn-")[16];
var buttonElement1 = document.getElementsByClassName("btn-")[15];
var buttonElement2 = document.getElementsByClassName("btn-")[14];
var buttonElement3 = document.getElementsByClassName("btn-")[13];
var buttonElement4 = document.getElementsByClassName("btn-")[12];
var buttonElement5 = document.getElementsByClassName("btn-")[11];
var buttonElement6 = document.getElementsByClassName("btn-")[10];
var buttonElement7 = document.getElementsByClassName("btn-")[9];
var buttonElement8 = document.getElementsByClassName("btn-")[8];
var buttonElement9 = document.getElementsByClassName("btn-")[7];
var buttonClean = document.getElementsByClassName("btn-")[0];
var buttonAdd = document.getElementsByClassName("btn-")[4];
var buttonEqual = document.getElementsByClassName("btn-")[6];
var buttonMultiply = document.getElementById("multiply");
var buttonDivision = document.getElementById("division");
var buttonMinus = document.getElementById("minus");

//array of signs
// buttonMinus,buttonMultiply,buttonDivision,buttonAdd.innerHTML,buttonEqual.innerHTML

var arraySigns= [];


 


// Get the value of the button
var buttonValue0 = parseInt(buttonElement0.innerHTML);
var buttonValue1 = parseInt(buttonElement1.innerHTML);
var buttonValue2 = parseInt(buttonElement2.innerHTML);
var buttonValue3 = parseInt(buttonElement3.innerHTML);
var buttonValue4 = parseInt(buttonElement4.innerHTML);
var buttonValue5 = parseInt(buttonElement5.innerHTML);
var buttonValue6 = parseInt(buttonElement6.innerHTML);
var buttonValue7 = parseInt(buttonElement7.innerHTML);
var buttonValue8 = parseInt(buttonElement8.innerHTML);
var buttonValue9 = parseInt(buttonElement9.innerHTML);
 
 var num1 = 0;
var num2 = 0;


//input element and value 
var inputElement = document.getElementsByClassName("input")[0];
var inputValue= [inputElement.value];
   


// button clean special function 
function cleanNumbersAll(){

    inputValue = [0];
    document.getElementsByClassName("input")[0].value = inputValue;
    arraySigns = [];
    



}
buttonClean.addEventListener('click', cleanNumbersAll);


// button clean numbers


function cleanNumbers(){

    inputValue = [0];
    document.getElementsByClassName("input")[0].value = inputValue;
     



}



//button add 

function addNumbers(){
    // if(arraySigns==0){
    arraySigns.push('+');
    console.log(arraySigns);
    inputValue.shift();
     num1 = inputValue.join('');
    console.log(num1)
   
    cleanNumbers();
    

    }


// }
buttonAdd.addEventListener('click' , addNumbers);


//button minus

function minNumbers(){
    if(arraySigns==0){
    arraySigns.push('-');
    console.log(arraySigns);
    inputValue.shift();
     num1 = inputValue.join('');
    console.log(num1)

    cleanNumbers();
    }


}
buttonMinus.addEventListener('click' , minNumbers);


//button multi

function multiplyNumbers(){
    if(arraySigns==0){
    arraySigns.push('*');
    console.log(arraySigns);
    inputValue.shift();
     num1 = inputValue.join('');
    console.log(num1)

    cleanNumbers();
    }


}
buttonMultiply.addEventListener('click' , multiplyNumbers);



//button division

function divideNumbers(){
    if(arraySigns==0){
    arraySigns.push('/');
    console.log(arraySigns);
    inputValue.shift();
     num1 = inputValue.join('');
    console.log(num1)

    cleanNumbers();
    }


}
buttonDivision.addEventListener('click' , divideNumbers);






/// equal operator

function equalOperator(){
inputValue.shift();
num2 = inputValue.join('');
 if(arraySigns[arraySigns.length-1]== '+') {document.getElementsByClassName("input")[0].value = Number(num1)+Number(num2);
 if(buttonAdd) console.log(buttonAdd);
 }
 if(arraySigns[arraySigns.length-1]== '-') {document.getElementsByClassName("input")[0].value = Number(num1)-Number(num2)};

 if(arraySigns[arraySigns.length-1]== '*') {document.getElementsByClassName("input")[0].value = Number(num1)*Number(num2)};

 if(arraySigns[arraySigns.length-1]== '/') {document.getElementsByClassName("input")[0].value = Number(num1)/Number(num2)};








}
buttonEqual.addEventListener('click', equalOperator );




//clear Button
var clearButton = document.getElementById("clearbtn");
clearButton.addEventListener('click' , function(){
    if (inputValue.length >0) {
        inputValue.pop(); // Remove the last element
      
    // console.log(inputValue);
    document.getElementsByClassName("input")[0].value = inputValue.join('');}
    
})


// define an Array for input value
 
 
 
function numberInput0() {
    // inputValue = inputValue + buttonValue1;
    if(inputValue!=0){
  inputValue.push(buttonValue0);
      document.getElementsByClassName("input")[0].value = inputValue.join('');}
 }

function numberInput1() {
    inputValue.push(buttonValue1);
      document.getElementsByClassName("input")[0].value = inputValue.join('');
    
}
function numberInput2() {
    inputValue.push(buttonValue2);
    document.getElementsByClassName("input")[0].value = inputValue.join('');
}
function numberInput3() {
    inputValue.push(buttonValue3);
    document.getElementsByClassName("input")[0].value = inputValue.join('');
}
function numberInput4() {
    inputValue.push(buttonValue4);
      document.getElementsByClassName("input")[0].value = inputValue.join('');
}
function numberInput5() {
    inputValue.push(buttonValue5);
      document.getElementsByClassName("input")[0].value = inputValue.join('');
}
function numberInput6() {
    inputValue.push(buttonValue6);
      document.getElementsByClassName("input")[0].value = inputValue.join('');
}
function numberInput7() {
    inputValue.push(buttonValue7);
      document.getElementsByClassName("input")[0].value = inputValue.join('');
}
function numberInput8() {
    inputValue.push(buttonValue8);
      document.getElementsByClassName("input")[0].value = inputValue.join('');
}
function numberInput9() {
    inputValue.push(buttonValue9);
    document.getElementsByClassName("input")[0].value = inputValue.join('');
}
// function numberInput0() {
//     // inputValue = inputValue + buttonValue1;
//     inputValue = inputValue.concat(buttonValue0);
//     // console.log("The button is clicked")
//     console.log(inputValue)
//     document.getElementsByClassName("input")[0].value = inputValue;
// }


buttonElement0.addEventListener("click" , numberInput0);
buttonElement1.addEventListener("click" , numberInput1);
buttonElement2.addEventListener("click" , numberInput2);
buttonElement3.addEventListener("click" , numberInput3);
buttonElement4.addEventListener("click" , numberInput4);
buttonElement5.addEventListener("click" , numberInput5);
buttonElement6.addEventListener("click" , numberInput6);
buttonElement7.addEventListener("click" , numberInput7);
buttonElement8.addEventListener("click" , numberInput8);
buttonElement9.addEventListener("click" , numberInput9);


// inputElement.addEventListener("click" , numberInput)