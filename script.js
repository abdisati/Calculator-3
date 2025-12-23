//get the input element
const input=document.getElementById("display");


//concat function to add the value to the input
function concat(val){
    input.value +=val;
}


//calculate function to calculate of evaluate the expression in the text input
function calculate(){
    let text=input.value;
    let val=eval(text); //evaluate the expression
    input.value=val;
}