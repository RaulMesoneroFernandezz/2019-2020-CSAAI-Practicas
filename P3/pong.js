console.log("Ejecutando JS...");

//-- Obtener el objeto canvas
const canvas = document.getElementById("canvas");

//-- Sus dimensiones las hemos fijado en el fichero
//-- HTML. Las imprimimos en la consola
console.log(`canvas: Anchura: ${canvas.width}, Altura: ${canvas.height}`);

//-- Obtener el contexto para pintar en el canvas
const ctx = canvas.getContext("2d");

let empezado = false;

//-- letiables para la bola
let bola_x_ini = 295;
let bola_y_ini = 100;
let bola_x = 295;
let bola_y = 100;
let bola_vx = 0;
let bola_vy = 0;

//-- letiables del contador
let cont_izq = 0;
let cont_dcho = 0;

//--Variables del contador de tiempo.
let timer;
let timerOn = false;
let minutos = 0;
let segundos = 0;
let textoTimer = '';

//-- contador para la velocidad de la raqueta en función del nivel
let nivel = 0;


//-- letiables para la raqueta izquierda
let raqI_tam_y = 60;
let raqI_x = 50;
let raqI_y = 100;
let raqI_v = 0;  //-- Velocidad

//-- letiables para la raqueta izquierda
let raqD_tam_y = 60;
let raqD_x = 540;
let raqD_y = 100;
let raqD_v = 0;  //-- Velocidad


//-- Pintar todos los objetos en el canvas
function draw(dcho, izq) {

  //----- Dibujar la Bola
  ctx.beginPath();
  ctx.fillStyle = 'white';

  //-- x,y, anchura, altura
  ctx.rect(bola_x, bola_y, 10, 10);
  ctx.fill();



  //------- Dibujar las raquetas
  ctx.beginPath();
  ctx.fillStyle = 'white';

  //-- Raqueta izquierda
  ctx.rect(raqI_x, raqI_y, 10, raqI_tam_y);

  //-- Raqueta derecha
  ctx.rect(raqD_x, raqD_y, 10, raqD_tam_y);

  //-- Pintar!
  ctx.fill();




  //--------- Dibujar la red
  ctx.beginPath();

  //-- Estilo de la linea: discontinua
  //-- Trazos de 10 pixeles, y 10 de separacion
  ctx.setLineDash([10, 10]);
  ctx.strokeStyle = 'white';
  ctx.lineWidth = 2;
  //-- Punto superior de la linea. Su coordenada x está en la mitad
  //-- del canvas
  ctx.moveTo(canvas.width / 2, 0);

  //-- Dibujar hasta el punto inferior
  ctx.lineTo(canvas.width / 2, canvas.height);
  ctx.stroke();

  //------ Dibujar el tanteo
  ctx.font = "100px Arial";
  ctx.fillStyle = "white";
  ctx.fillText(izq.toString(), 100, 80);
  ctx.fillText(dcho.toString(), 420, 80);
}

function drawTimer(seg) {

  if (seg > 59) {
    segundos = 0;
    minutos++;
  }

  let min = minutos;

  if (seg < 10) {
    textoTimer = `${min.toString()}:0${seg.toString()}`;
  } else {
    textoTimer = `${min.toString()}:${seg.toString()}`;
  }

  ctx.font = "50px Arial";
  ctx.fillStyle = "white";
  ctx.fillText(textoTimer, 265, 40);
}

//---- Bucle principal de la animación
function animacion() {

  //-- Actualizar las posiciones de los objetos móviles

  //-- Comprobar si la bola ha alcanzado el límite derecho
  //-- Si es así, se cambia de signo la velocidad, para
  // que "rebote" y vaya en el sentido opuesto
  if (bola_x >= canvas.width) {
    //-- Hay colisión. Cambiar el signo de la bola
    bola_x = bola_x_ini;
    bola_y = bola_y_ini;
    bola_vx = 0;
    bola_vy = 0;
    clearInterval(timer);
    timerOn = false;
    cont_izq++;
    //añadir sonido aquí
  }

  if (bola_x <= 1) {
    //-- Hay colisión. Cambiar el signo de la bola al sentido contrario (- * - = +)
    bola_x = bola_x_ini;
    bola_y = bola_y_ini;
    bola_vx = 0;
    bola_vy = 0;
    clearInterval(timer);
    timerOn = false;
    cont_dcho++;
    //añadir sonido aquí
  }

  if (bola_y >= canvas.height) {
    //-- Hay colisión. Cambiar el signo de la bola
    bola_vy = bola_vy * -1;
    //añadir sonido aquí
  }

  if (bola_y <= 1) {
    //-- Hay colisión. Cambiar el signo de la bola
    bola_vy = bola_vy * -1;
    //añadir sonido aquí
  }


  //-- Actualizar coordenada x de la bola, en funcion de
  //-- su velocidad
  bola_x += bola_vx;


  //-- Actualizar coordenada x de la bola, en funcion de
  //-- su velocidad
  bola_y += bola_vy;



  //-- Actualizar la raqueta derecha con la velocidad actual
  if (!((raqD_y == 0 && raqD_v < 0) || (raqD_y == canvas.height - raqD_tam_y && raqD_v > 0))) {
    raqD_y += raqD_v;
  }
  if (!((raqI_y == 0 && raqI_v < 0) || (raqI_y == canvas.height - raqI_tam_y && raqI_v > 0))) {
    raqI_y += raqI_v;
  }

  //-- Actualizar la raqueta izquierda con la velocidad actual


  //-- Comprobar si hay colisión con la raqueta izquierda
  if (bola_x >= raqI_x && bola_x <= (raqI_x + 10) &&
    bola_y >= raqI_y && bola_y <= (raqI_y + raqI_tam_y)) {
    bola_vx = bola_vx * -1;
  }

  //-- Comprobar si hay colisión con la raqueta derecha
  if (bola_x <= raqD_x && bola_x >= (raqD_x - 10) &&
    bola_y >= raqD_y && bola_y <= (raqD_y + raqD_tam_y)) {
    bola_vx = bola_vx * -1;
  }


  //-- Borrar la pantalla
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  //-- Dibujar el nuevo frame
  draw(cont_dcho, cont_izq);
  drawTimer(segundos);
}

//-- Arrancar la animación
setInterval(() => {
  animacion();
}, 16);




window.onkeydown = (e) => {
  //-- Según la tecla se hace una cosa u otra
  switch (e.key) {

    //-- Tecla ESPACIO: Saque
    case "1":
      if (!timerOn) {
        minutos = 0;
        segundos = 0;
        timer = setInterval(() => {
          segundos++;
          drawTimer(segundos);
        }, 1000);
        timerOn = true;
      }
      if (!empezado || nivel != 1) {
        cont_izq = 0;
        cont_dcho = 0;
        empezado = true;
      }
      nivel = 1;
      bola_vx = 4;
      bola_vy = 3;
      raqD_tam_y = 60;
      raqI_tam_y = 60;
      console.log("Saque!");
      break;

    case "2":
      if (!timerOn) {
        minutos = 0;
        segundos = 0;
        timer = setInterval(() => {
          segundos++;
          drawTimer(segundos);
        }, 1000);
        timerOn = true;
      }
      if (!empezado || nivel != 2) {
        cont_izq = 0;
        cont_dcho = 0;
        empezado = true;
      }
      nivel = 2;
      bola_vx = 7;
      bola_vy = 4;
      raqD_tam_y = 40;
      raqI_tam_y = 40;
      console.log("Saque!");
      break;
    case "w":
      raqI_v = -4 * nivel;
      break;
    case "s":
      raqI_v = 4 * nivel;
      break;
    case "i":
      raqD_v = -4 * nivel;
      break;
    case "k":
      raqD_v = 4 * nivel;
      break;
    case "f":
      timerOn = false;
      clearInterval(timer);
      segundos = 0;
      minutos = 0;
      bola_x = bola_x_ini;
      bola_y = bola_y_ini;
      bola_vx = 0;
      bola_vy = 0;
      cont_dcho = 0;
      cont_izq = 0;
      break;
    default:
      break;
  }
}

//-- Retrollamada de la liberacion de teclas
window.onkeyup = (e) => {
  if (e.key == "w" || e.key == "s") {
    //-- Quitar velocidad de la raqueta
    raqI_v = 0;
  }
  if (e.key == "k" || e.key == "i") {
    //-- Quitar velocidad de la raqueta
    raqD_v = 0;
  }
}






