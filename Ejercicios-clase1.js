// EJERCICIOS CLASE 1

/* 1. Escribe un programa que le pida al usuario ingresar una frase y la imprima en la consola.
Recuerda que para pedirle al usuario que escriba una frase debes utilizar el método prompt() y para escribir en la consola debes utilizar el método console.log(). */

console.log(prompt("Por favor ingrese una frase:"))


/* 2. Escribe un programa que le pregunte al usuario su nombre e imprima "Hola " seguido del nombre y un signo de exclamación.

Por ejemplo, si el usuario ingresa "Pedro" el programa debe imprimir en la consola "Hola Pedro!". */

const nombre= prompt("Por favor ingrese su nombre:")
console.log("Hola" + " " + nombre + "!")

/* 3. Escribe un programa que le pida al usuario ingresar un número, luego le pide un segundo número, e imprima en la consola la suma de los dos números que ingresó el usuario.*/
const num1 = parseInt(prompt("Por favor ingrese numero 1:"))

const num2= parseInt(prompt("Por favor ingrese numero 2:"))


suma = num1 + num2

console.log("La suma es:" + (suma))

/* 4. Escribe un programa que le pida al usuario su año de nacimiento e imprima su edad actual en la consola con la frase "Tienes X años". Por ejemplo, asumiendo que el año actual es 2020 y el usuario ingresa 2000, el programa debe imprimir en la consola:

Tienes 20 años
 */

const ed = parseInt(prompt("Por favor ingrese su año de nacimiento:"))

edad = 2020 - ed

console.log("Tienes" + " " + edad + " " + "años")


/* 5. El índice de masa corporal (IMC), o BMI por sus siglas en inglés, es un valor que determina la cantidad de grasa de una persona.

El BMI se calcula con la siguiente formula:

peso / altura^2

Escribe un programa que le pida al usuario su peso y su altura para calcular su BMI e imprima la frase "Tu BMI es X".

Por ejemplo, si el usuario ingresa 65 de peso y 1.8 de altura el programa debe imprimir en la consola la frase "Tu BMI es 20.061728395061728". */

const peso = parseFloat(prompt("Por favor ingrese su peso:"))

const altura = parseFloat(prompt("Por favor ingrese su altura:"))


bmi = peso / Math.pow(altura, 2)

console.log("Tu BMI es:" + (bmi))
