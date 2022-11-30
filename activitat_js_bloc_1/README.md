Actividad 1
A continuación, se muestra un primer script sencillo pero completo:

```HTML
<!DOCTYPE html>
<html>
<head>
<meta charset=”UTF-8"/>
<title>El primer script</title>
<script type="text/javascript">
alert("Hola Mundo!");
</script>
</head>
<body>
<p>Esta página contiene el primer script</p>
</body>
</html>
```

Modificar el primer script para que:

1. Todo el código JavaScript se encuentre en un archivo externo llamado
   codigo.js y el script siga funcionando de la misma manera.
2. Después del primer mensaje, se debe mostrar otro mensaje que diga "Soy el
   primer script"
3. Añadir algunos comentarios que expliquen el funcionamiento del código
4. Añadir en la página HTML un mensaje de aviso para los navegadores que no
   tengan activado el soporte de JavaScript

Actividad 2
Modificar el script anterior para que:

1. El mensaje que se muestra al usuario se almacene en una variable llamada
   mensaje y el funcionamiento del script sea el mismo.
2. El mensaje mostrado sea el de la siguiente imagen:

Actividad 3
Crear un array llamado meses y que almacene el nombre de los doce meses del año.
Mostrar por pantalla los doce nombres utilizando la función alert().

Actividad 4

A partir del siguiente array que se proporciona:

```js
var valores = [true, 5, false, "hola", "adios", 2];
```

1. Determinar cuál de los dos elementos de texto es mayor
2. Utilizando exclusivamente los dos valores booleanos del array, determinar los
   operadores necesarios para obtener un resultado true y otro resultado false
3. Determinar el resultado de las cinco operaciones matemáticas realizadas con los
   dos elementos numéricos

Actividad 5
Completar las condiciones de los if del siguiente script para que los mensajes de los
alert() se muestren siempre de forma correcta:

```JS
var numero1 = 5;
var numero2 = 8;
if(...) {
alert("numero1 no es mayor que numero2");
}
if(...) {
alert("numero2 es positivo");
}
if(...) {
alert("numero1 es negativo o distinto de cero");
}
if(...) {
alert("Incrementar en 1 unidad el valor de numero1 no lo hace mayor o igual que numero2");
}
```

Actividad 6
El cálculo de la letra del Documento Nacional de Identidad (DNI) es un proceso matemático
sencillo que se basa en obtener el resto de la división entera del número de DNI y el número 23. A partir del resto de la división, se obtiene la letra seleccionándola dentro de un array de
letras.
El array de letras es:

```JS
var letras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V','H', 'L', 'C', 'K', 'E', 'T'];
```

Por tanto si el resto de la división es 0, la letra del DNI es la T y si el resto es 3 la letra es la A.
Con estos datos, elaborar un pequeño script que:

1. Almacene en una variable el número de DNI indicado por el usuario y en otra variable
   la letra del DNI que se ha indicado. (Pista: si se quiere pedir directamente al usuario
   que indique su número y su letra, se puede utilizar la función prompt())
2. En primer lugar (y en una sola instrucción) se debe comprobar si el número es menor
   que 0 o mayor que 99999999. Si ese es el caso, se muestra un mensaje al usuario
   indicando que el número proporcionado no es válido y el programa no muestra más
   mensajes.
3. Si el número es válido, se calcula la letra que le corresponde según el método
   explicado anteriormente.
4. Una vez calculada la letra, se debe comparar con la letra indicada por el usuario. Si no
   coinciden, se muestra un mensaje al usuario diciéndole que la letra que ha indicado no
   es correcta. En otro caso, se muestra un mensaje indicando que el número y la letra de
   DNI son correctos.

Actividad 7
El factorial de un número entero n es una operación matemática que consiste en multiplicar
todos los factores n x (n-1) x (n-2) x ... x 1. Así, la factorial de 5 escrito como 5 es
igual a: 5! = 5 x 4 x 3 x 2 x 1 = 120
Utilizando la estructura for, crear un script que calcule el factorial de un número entero.

Actividad B1
La gravedad de la Luna es de alrededor del 17% de la Tierra. Escribe un programa que calcule
su peso efectivo en la Luna.
