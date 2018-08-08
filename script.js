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
var clear = document.getElementById('clear')
var inputStr = "";
one.addEventListener('click', function add(){
    inputs.innerHTML += "1"
    inputStr += 1
});
two.addEventListener('click', function add(){
    inputs.innerHTML += "2"
    inputStr += 2
});
three.addEventListener('click', function add(){
    inputs.innerHTML += "3"
    inputStr += 3
});
four.addEventListener('click', function add(){
    inputs.innerHTML += "4"
    inputStr += 4
});
five.addEventListener('click', function add(){
    inputs.innerHTML += "5"
    inputStr += 5
});
six.addEventListener('click', function add(){
    inputs.innerHTML += "6"
    inputStr += 6
});
seven.addEventListener('click', function add(){
    inputs.innerHTML += "7"
    inputStr += 7
});
eight.addEventListener('click', function add(){
    inputs.innerHTML += "8"
    inputStr += 8
});
nine.addEventListener('click', function add(){
    inputs.innerHTML += "9"
    inputStr += 9
});
zero.addEventListener('click', function add(){
    inputs.innerHTML += "0"
    inputStr += 0
});
addition.addEventListener('click', function add(){
    inputs.innerHTML += "+"
    inputStr += "+"
});
sub.addEventListener('click', function add(){
    inputs.innerHTML += "-"
    inputStr += "-"
});
divide.addEventListener('click', function add(){
    inputs.innerHTML += "/"
    inputStr += "/"
});
multiply.addEventListener('click', function add(){
    inputs.innerHTML += "*"
    inputStr += "*"
});
decimal.addEventListener('click', function add(){
    inputs.innerHTML += "."
    inputStr += "."
});
lPara.addEventListener('click', function add(){
    inputs.innerHTML += "("
    inputStr += "("
});
rPara.addEventListener('click', function add(){
    inputs.innerHTML += ")"
    inputStr += ")"
});
equal.addEventListener('click', function add(){
    inputs.innerHTML = eval(inputStr)
});

clear.addEventListener('click', function add(){
    inputs.innerHTML = ''
    inputStr = ''
});


