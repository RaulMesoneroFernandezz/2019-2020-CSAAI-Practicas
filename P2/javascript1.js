console.log("REFFERENZ'S XTREME CALCULATOR");

var operandoa;
var operandob;
var operacion;

function init (){
  var reset = document.getElementById('reset');
  var dividir = document.getElementById('dividir');
  var multiplicar = document.getElementById('multiplicar');
  var borrar = document.getElementById('borrar');

  var siete = document.getElementById('siete');
  var ocho = document.getElementById('ocho');
  var nueve = document.getElementById('nueve');
  var restar = document.getElementById('restar');

  var cuatro = document.getElementById('cuatro');
  var cinco = document.getElementById('cinco');
  var seis = document.getElementById('seis');
  var sumar = document.getElementById('sumar');

  var uno = document.getElementById('uno');
  var dos = document.getElementById('dos');
  var tres = document.getElementById('tres');
  var igual = document.getElementById('igual');

  var cero = document.getElementById('cero');
  var coma = document.getElementById('coma');

  var resultado = document.getElementById('resultado');
}

uno.onclick = function(e){
  resultado.textContent = resultado.textContent + "1";
}
dos.onclick = function(e){
  resultado.textContent = resultado.textContent + "2";
}
tres.onclick = function(e){
  resultado.textContent = resultado.textContent + "3";
}
cuatro.onclick = function(e){
  resultado.textContent = resultado.textContent + "4";
}
cinco.onclick = function(e){
  resultado.textContent = resultado.textContent + "5";
}
seis.onclick = function(e){
  resultado.textContent = resultado.textContent + "6";
}
siete.onclick = function(e){
  resultado.textContent = resultado.textContent + "7";
}
ocho.onclick = function(e){
  resultado.textContent = resultado.textContent + "8";
}
nueve.onclick = function(e){
  resultado.textContent = resultado.textContent + "9";
}
cero.onclick = function(e){
  resultado.textContent = resultado.textContent + "0";
}
reset.onclick = function(e){
  resetear();
}
sumar.onclick = function(e){
  operandoa = resultado.textContent;
  operacion = "+";
  limpiar();
}
restar.onclick = function(e){
  operandoa = resultado.textContent;
  operacion = "-";
  limpiar();
}
multiplicar.onclick = function(e){
  operandoa = resultado.textContent;
  operacion = "*";
  limpiar();
}
dividir.onclick = function(e){
  operandoa = resultado.textContent;
  operacion = "/";
  limpiar();
}
igual.onclick = function (e) {
  operandob = resultado.textContent;
  resolver();
}
borrar.onclick = function (e) {
  resultado.textContent = "0";
}

function limpiar() {
  resultado.textContent = "";
}

function resetear () {
  operandoa = 0;
  operandob = 0;
  operacion = "";
  resultado.textContent = "";
}

function resolver(){
  var res = 0;
  switch (operacion) {
    case "+":
      res = parseFloat(operandoa) + parseFloat(operandob);
      break;
    case "-":
      res = parseFloat(operandoa) - parseFloat(operandob);
      break;
    case "*":
      res = parseFloat(operandoa) * parseFloat(operandob);
      break;
    case "/":
      res = parseFloat(operandoa) / parseFloat(operandob);
      break;
  }
  resetear();
  resultado.textContent = res;
}
