console.log("REFFERENZ'S XTREME CALCULATOR");

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
  resultado.TextContent = resultado.TextContent + "1";
}

reset.onclick = () => {
  console.log("Esto es resetear")
}
dividir.onclick = () => {
  console.log("Esto es dividir")
}
