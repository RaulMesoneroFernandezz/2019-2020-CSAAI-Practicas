# Practica 3: Pong
Pong para Google Chrome y Mozilla.
Darle un clic en el canvas antes de jugar para que se activen las teclas

Pong con 2 niveles de dificultad. Para empezar a jugar pulsar 1 (modo facil) o pulsar 2 (modo dificil, raquetas mas pequeñas y velocidad superior de la bola). Una vez que hayas empezado una de las dos modalidades, se utilizará ese botón para sacar otra vez. Una vez que pulses la otra modalidad, los contadores se reiniciarán para empezar otra partida con ese nivel de dificultad.

Cada vez que se anota un punto (la bola toca uno de los dos extremos del campo) el contador sumará uno, y el timer se parará indicando el tiempo de jugada, y se reiniciará para timear la siguiente jugada.

Si se quiere reiniciar los contadores, pulsar "f" para empezar nueva partida, teniendo que elegir otra vez el modo de dificultad.

El jugador de la izquierda moverá su raqueta con los botones "w" y "s".
El jugador de la derecha moverá su raqueta con los botones "i" y "k".

Mejoras respecto a la evaluación ordinaria:
  - Las raquetas no pueden salirse del campo
  - Cada vez que se anota un punto, la bola vuelve al medio esperando a sacar otra vez pulsando el 1 o el 2 dependiendo de que modalidad estes jugando.
  - Timer para contar el tiempo de jugada.
