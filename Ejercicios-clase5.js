/* Ejercicio 23

Escribe un programa que le pida una frase al usuario y la repita en mayúsculas. Por ejemplo:

Ingresa una frase> Hola Mundo
HOLA MUNDO */

const frase=prompt("Ingresa una frase:")

console.log(frase.toUpperCase())

/* Ejercicio 24

Escribe un programa que le pida una frase al usuario y le muestre el número de caracteres "a" que hay en la frase. Por ejemplo:

Ingresa una frase> Hasta la próxima
La frase tiene 4 caracteres
*/

const frase=prompt("Ingresa una frase:")

for (let i=0; i<frase.length; i++){
  console.log(frase[i]) 
}


/* Escribe un programa que le pida una frase al usuario y le muestre una nueva frase con los siguientes cambios:

    Las mayúsculas se reemplazan por minúsculas.
    Se eliminan los espacios en blanco.
    Reemplaza el caracter "a" por "4".
    Reemplaza el caracter "e" por "3".
    Reemplaza el caracter "i" por "1".
    Reemplaza el caracter "o" por "0".

Ejemplo:

Ingresa una frase> esta es una prueba
3st43sun4pru3b4
*/

let newfrase=prompt("Ingrese una frase: ")
newfrase=newfrase.toLowerCase()
newfrase=newfrase.replace(/a/g,"4")
newfrase=newfrase.replace(/e/g,"3")
newfrase=newfrase.replace(/i/g,"1")
newfrase=newfrase.replace(/o/g,"0")
newfrase=newfrase.replace(/ /g, " ")
console.log(newfrase)


/*Ejercicio 26

Escribe un programa que le pida una frase al usuario y capitalice cada palabra. Por ejemplo:

Ingresa una frase> esta es una prueba
Esta Es Una Prueba */
 
const frase=prompt("Ingresa una frase:")

frase1=frase.charAt(0).toUpperCase() + frase.slice(1);
console.log(frase1)


/* *Ejercicio 27
Escribe un programa que le pida una frase al usuario e imprima cada palabra en una nueva línea. Por ejemplo:

Ingresa una frase> esta es una prueba
esta
es
una
prueba

Nota: Las palabras se separan por espacio.*/

let frase=prompt("Ingresa una frase:")

frase1=frase.split(" ")

for (let i=0;i<frase1.length;i++){
  console.log(frase1[i])
}


/* Ejercicio 28 (Bonus)

Escribe un programa que le pida dos frases al usuario e imprima los caracteres que tienen en común. Si no tienen caracteres en común debe imprimir "No se encontraron caracteres en común".

Ejemplo 1:

Ingresa frase 1> German
Ingresa frase 2> Gabriela
Los caracteres en común son: G, e, r, a

Ejemplo 2:

Ingresa frase 1> Hola
Ingresa frase 2> Bye
No se encontraron caracteres en común
*/

