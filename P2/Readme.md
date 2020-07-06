# Practica 2: Calculadora
Calculadora para Google Chrome y Mozilla.
Según se abre el .html ya se puede empezar a utilizar.

El método de utilización es este:
A ("+" o "-" o "x" o "÷") B y pulsar el boton "="
El resultado pasa a ser A y se tiene que pulsar otra operación y otro numero y luego el "=" .

Es decir, es una calculadora que solo hace la operación con dos números. Para que funcione bien se tiene que escribir:
a + b (siendo a y b cualquier número) y luego pulsar el simbolo "=". Después de esto te da un resultado que puedes seguir operando con el siendo ahora el resultado el operando a. No se puede escribir a + b + c + ...  = La calculadora lo controla y te da en mensaje de error, teniendo que pulsar el boton C para volver a utilizarla normalmente. Tampoco admite pulsar dos veces un simbolo de operación.

Resaltar que solo aparece en pantalla los numeros que has escrito, no aparece el simbolo de la operación.

El boton C resetea la calculadora para empezar a calcular otra vez.

He añadido la función "," para manejar numeros decimales y la he mejorado para que funcione incluso cuando no pones el numero entero, la calculadora lo entiende como 0,x. El boton "," solo funciona cuando tiene sentido.

Extras: tiene dos botones, uno para guardar un resultado llamado memoria (M) que solo funciona cuando ya se ha obtenido el resultado de una operación. Y otro para mostrasla (M1), que funciona como operando "A" de la calculadora, es decir, se pulsa M1, te muestra el numero guardado, se tiene que pulsar una operación, otro número y luego al "=".
