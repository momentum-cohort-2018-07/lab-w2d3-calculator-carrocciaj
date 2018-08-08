var one = document.getElementById('one')
var two = document.getElementById('two')
var three = document.getElementById('three')
var four = document.getElementById('four')
var five = document.getElementById('five')
var six = document.getElementById('six')
var seven = document.getElementById('seven')
var eight = document.getElementById('eight')
var nine = document.getElementById('nine')
var zero = document.getElementById('zero')
var addition = document.getElementById('addition')
var equal = document.getElementById('equal')
var inputs = document.getElementById('inputs')
var inputStr = "";
one.addEventListener('click', function addInput1(){
    inputs.innerHTML += "1"
    inputStr += 1
});
two.addEventListener('click', function addInput2(){
    inputs.innerHTML += "2"
    inputStr += 2
});
three.addEventListener('click', function addInput2(){
    inputs.innerHTML += "3"
    inputStr += 3
});
four.addEventListener('click', function addInput2(){
    inputs.innerHTML += "4"
    inputStr += 4
});
five.addEventListener('click', function addInput2(){
    inputs.innerHTML += "5"
    inputStr += 5
});
six.addEventListener('click', function addInput2(){
    inputs.innerHTML += "6"
    inputStr += 6
});
seven.addEventListener('click', function addInput2(){
    inputs.innerHTML += "7"
    inputStr += 7
});
eight.addEventListener('click', function addInput2(){
    inputs.innerHTML += "8"
    inputStr += 8
});
nine.addEventListener('click', function addInput2(){
    inputs.innerHTML += "9"
    inputStr += 9
});
zero.addEventListener('click', function addInput2(){
    inputs.innerHTML += "0"
    inputStr += 0
});
addition.addEventListener('click', function addInputAdd(){
    inputs.innerHTML += "+"
    inputStr += "+"
});
sub.addEventListener('click', function addInputAdd(){
    inputs.innerHTML += "-"
    inputStr += "-"
});
divide.addEventListener('click', function addInputAdd(){
    inputs.innerHTML += "/"
    inputStr += "/"
});
multiply.addEventListener('click', function addInputAdd(){
    inputs.innerHTML += "*"
    inputStr += "*"
});
equal.addEventListener('click', function runInputs(){
    inputs.innerHTML = eval(inputStr)
});


