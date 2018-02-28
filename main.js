//alert('Hello');
function f1(){
    alert('you click the button!');
}
function pow2(){
//document.getElementById('inp1').value
//alert(document.getElementById('inp1').value*document.getElementById('inp1').value)}
var num1;
num1 = document.getElementById('inp1').value;
alert(num1*num1);
}
function plus(){
var num1, num2;
num1 = document.getElementById('n1').value;
num1 = parseInt(num1);

num2 = document.getElementById('n2').value;
num2 = parseInt(num2);

result =num1+num2;

document.getElementById('out').innerHTML=result;
}
function minus(){
    var num1, num2;
    num1 = document.getElementById('n1').value;
    num1 = parseInt(num1);
    
    num2 = document.getElementById('n2').value;
    num2 = parseInt(num2);
    
    result =num1-num2;
    
    document.getElementById('out').innerHTML=result;
}
function mult(){
    var num1, num2;
    num1 = document.getElementById('n1').value;
    num1 = parseInt(num1);
    
    num2 = document.getElementById('n2').value;
    num2 = parseInt(num2);
    
    result =num1*num2;
    
    document.getElementById('out').innerHTML=result;
}
function divis(){
    var num1, num2;
    num1 = document.getElementById('n1').value;
    num1 = parseInt(num1);
    
    num2 = document.getElementById('n2').value;
    num2 = parseInt(num2);
    
    result =num1/num2;
    
    document.getElementById('out').innerHTML=result;
}

