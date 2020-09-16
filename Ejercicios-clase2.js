/* 6. Escribe un programa que le pida un número al usuario e imprima en la consola si el número es mayor o menor/igual a 10.

Si es mayor debe imprimir "El número es mayor a 10".

Si es menor debe imprimir "El número es menor o igual a 10". */

const num= parseInt(prompt("Ingrese un numero:"))
if (num > 10){
  console.log("El numero es mayor a 10")
} else if (num == 10){
  console.log("El numero es igual a 10")
} else {
  console.log("El numero es menor a 10")
}

/* 

7. Escribe un programa que piense un número de forma aleatoria del 1 al 10 y le pida al usuario que lo trate de adivinar. Si el número es correcto debe imprimir en la consola "Felicitaciones, ese era!", de lo contrario debe imprimir "Lo siento, intenta nuevamente!" 

*/
let number=Math.floor(Math.random() * 10) + 1;
console.log("Hola, piensa un numero del 1 al 10")
if (number >0 && number <10){
  console.log("Felicitaciones ese era!")
} else{
   console.log("Fallaste jajaja")
}

/* 8. Un múltiplo de 5 es aquel que dividido por 5 da por resultado un número entero (sin residuo). Por ejemplo 10, 15, 20, etc. son múltiplos de 5. 11 no es múltiplo de 5 porque quedaría un residuo de 1.

Escribe un programa que le pida al usuario un número e imprima si es un múltiplo de 5 o no.

Si es múltiplo debe imprimir "Si, el número x es múltiplo 5", de lo contrario debe imprimir "No, el número x no es múltiplo de 5".
*/

let multiplo= parseInt(prompt("Hola, ingresa un numero"))

if (multiplo%5 == 0){
  console.log("Si, el número" + multiplo + "es múltiplo 5")
} else {
  console.log("No, el número" + multiplo + "No es múltiplo 5")
}

/* 9. Escribe un programa que le pida un número al usuario e imprima en la consola si el número si es mayor, menor o igual que 10.

Si el número es menor a 10 debe imprimir "El número es menor que 10".

Si el número es mayor a 10 debe imprimir "El número es mayor que 10".

Si el número es igual a 10 debe imprimir "El número es igual a 10".*/

const num10= parseInt(prompt("Ingrese un numero:"))
if (num10 > 10){
  console.log("El numero es mayor a 10")
} else if (num10 == 10){
  console.log("El numero es igual a 10")
} else {
  console.log("El numero es menor a 10")
}

/* 10. El índice de masa corporal (IMC), o BMI por sus siglas en inglés, es un valor que determina la cantidad de grasa de una persona.

El BMI se calcula con la siguiente formula:

peso / altura^2

Escribe un programa que le pida al usuario su peso y altura. El programa deberá calcular el BMI e imprimir:

    "Bajo de peso" si el BMI < 18.5
    "Normal" si está entre 18.5 y 24.9
    "Sobrepeso" si está entre 25 y 29.9
    "Obeso" si es igual o mayor a 30 */



const peso = parseFloat(prompt("Por favor ingrese su peso:"))

const altura = parseFloat(prompt("Por favor ingrese su altura:"))


bmi = peso / Math.pow(altura, 2)

console.log("Tu BMI es:" + (bmi))

if (bmi < 18.5){
  console.log("Bajo de peso")
} else if(18.5< bmi < 24.9){
  console.log("Normal")
}else if (25< bmi <29.9){
  console.log("Sobrepeso")
} else{
  console.log("Obeso")
}

/* 11. Escribe un programa que le pida al usuario ingresar un número.

    Si el número es múltiplo de 3 debe imprimir en la consola "bing".
    Si el número es múltiplo de 5 debe imprimir en la consola "bong".
    Si el número es múltiplo tanto de 3 como de 5 debe imprimir en la consola "bingbong".
    Si no cumple ninguna de las condiciones anteriores debe imprimir el mismo número.
*/


let ping= parseInt(prompt("Hola, ingresa un numero"))

if (ping%3 == 0){
  console.log("Bing")
} else if(ping%5 == 0){
  console.log("Bong")
} else if (ping%3 && ping%5){
  console.log("BingBong")
}else {
  console.log(ping)
}
