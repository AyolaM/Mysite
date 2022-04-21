'use strict';
let result = document.getElementById('inputext');

let calculate =(number)=>{

    // result.value = result.value+number;
    result.value += number;

}

let Result=()=>{
    try{
        result.value = eval(result.value)
    }
    catch(err){
        alert("Enter a valid input");
    }
}

function clr(){
    result.value = " ";
}

function del(){
    result.value = result.value.slice(0,-1);
}

function myFunction() {
    var element = document.body;
    element.classList.toggle("dark-mode");
 }


 aaaaaa
function FV(PV,i,n){
var x=(1+i/100)
var FV=PV*(Math.pow(x,n))
return FV;
}
function Cal_FV(){
var pvalue=parseFloat(document.getElementById("a").value);
var interest=parseFloat(document.getElementById("b").value);
var num=parseInt(document.getElementById("c").value);
var fvalue=FV(pvalue, interest, num);
var fv=fvalue.toFixed(2);
document.getElementById('ans').textContent="The future value is= "+fv;
}