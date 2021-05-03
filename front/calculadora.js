var x;
var y;
var n;
var result;

function suma() {
  var xElement = document.getElementById("x");
  var yElement = document.getElementById("y");
  x = Number(xElement.value);
  y = Number(yElement.value);
  console.log(x);
  console.log(y);

  result = x + y;
  console.log(result);
  document.getElementById("suma").innerHTML = result;
}

function resta() {
  var xElement = document.getElementById("x");
  var yElement = document.getElementById("y");
  
  x = Number(xElement.value);
  y = Number(yElement.value);
  console.log(x);
  console.log(y);

  result = x - y;
  console.log(result);
  document.getElementById("resta").innerHTML = result;
}

function mult() {
  var xElement = document.getElementById("x");
  var yElement = document.getElementById("y");
  
  x = Number(xElement.value);
  y = Number(yElement.value);
  console.log(x);
  console.log(y);

  result = x * y;
  console.log(result);
  document.getElementById("mult").innerHTML = result;
}

function div() {
  var xElement = document.getElementById("x");
  var yElement = document.getElementById("y");
  
  x = Number(xElement.value);
  y = Number(yElement.value);
  console.log(x);
  console.log(y);

  result = x / y;
  console.log(result);
  document.getElementById("div").innerHTML = result;
}

function pow() {
  var xElement = document.getElementById("x");
  var yElement = document.getElementById("y");
  
  x = Number(xElement.value);
  y = Number(yElement.value);
  console.log(x);
  console.log(y);

  result = Math.pow(x, y);
  console.log(result);
  document.getElementById("pow").innerHTML = result;
}

function cuad() {
  var nElement = document.getElementById("n");
  
  n = Number(nElement.value);
  console.log(n);

  result = Math.pow(n, 2);
  console.log(result);
  document.getElementById("cuad").innerHTML = result;
}

function sqrt() {
  var nElement = document.getElementById("n");
  
  n = Number(nElement.value);
  console.log(n);

  result = Math.sqrt(n);
  console.log(result);
  document.getElementById("sqrt").innerHTML = result;
}

