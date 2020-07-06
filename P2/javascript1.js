console.log("REFFERENZ'S XTREME CALCULATOR");

var operandoa;
var operandob;
var operacion;
var cont = 0;
var contComa = 0;

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
  
  var memory = document.getElementById("memory");
  var memory1 = document.getElementById("memory1");
  
  var res = null;
  var memoria = null;
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
coma.onclick = function(e){
	if(!contComa > 0){
		if(!resultado.textContent.includes(".")){
			resultado.textContent = resultado.textContent + ".";
		}
	}
	contComa++;
}

reset.onclick = function(e){
  resetear();
}
sumar.onclick = function(e){
  if(cont < 1){
	operandoa = resultado.textContent;
	operacion = "+";
	limpiar();
	contComa = 0;
  }else{
	  resultado.innerHTML = "<b>ERROR</b>";
  }
  cont++;
}
restar.onclick = function(e){
  if(cont < 1){
	operandoa = resultado.textContent;
	operacion = "-";
	limpiar();
	contComa = 0;
  }else{
	  resultado.innerHTML = "<b>ERROR</b>";
  }
  cont++;
}
multiplicar.onclick = function(e){
  if(cont < 1){
	operandoa = resultado.textContent;
	operacion = "*";
	limpiar();
	contComa = 0;
  }else{
	  resultado.innerHTML = "<b>ERROR</b>";
  }
  cont++;
}
dividir.onclick = function(e){
  if(cont < 1){
	operandoa = resultado.textContent;
	operacion = "/";
	limpiar();
	contComa = 0;
  }else{
	  resultado.innerHTML = "<b>ERROR</b>";
  }
  cont++;
}
igual.onclick = function (e) {
  operandob = resultado.textContent;
  resolver();
}
borrar.onclick = function (e) {
  resultado.textContent = "0";
}

function limpiar() {
  resultado.innerHTML = "&nbsp";
}

function resetear () {
	operandoa = 0;
	operandob = 0;
	operacion = "";
	resultado.innerHTML = "&nbsp";
	cont = 0;
	contComa = 0;
	
}


function resolver(){
	if(cont == 1){
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
		default:
		  break;
	  }
	  resetear();
	  resultado.innerHTML = "<b>" + res.toString() + "</b>";	
	}
  
}

memory.onclick = () =>{
	if(res != null){
		memoria = res;
	}
}

memory1.onclick = () =>{
	cont = 1
	if(memoria != null){
		res = memoria;
	}
	resolver();
}









