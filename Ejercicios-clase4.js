/* Ejercicio 18

Crea un programa a partir de las siguientes instrucciones:

    Crea una variable llamada nombres con un arreglo que tenga los siguientes elementos: "Pedro", "Pablo", "María", "Juan", "Diana".
    Pídele al usuario que ingrese un nombre e insértalo al final del arreglo que creaste en el paso 1.
    Pídele al usuario que ingrese otro nombre y reemplaza la tercera posición del arreglo con este valor.
    Recorre el arreglo e imprímelo.

Un ejemplo de cómo se comportaría el programa en la consola sería el siguiente:

Ingresa un nombre> Camilo
Ingresa otro nombre> Ariel
Pedro
Pablo
Ariel
Juan
Diana
Camilo

*/
const names=["Pedro", "Pablo", "María", "Juan", "Diana"]

const nuevo=prompt("Ingrese un nuevo nombre")

names.push(nuevo) //Agregarlo al final
console.log(names) 

const nuevo2=prompt("Ingrese un otro nuevo nombre")
names.splice(3, 1, nuevo2) //Agregarlo en 3 posicion
console.log(names)

// Recorrer arreglo
for(let i=0; i<names.length; i++){
  console.log(names[i])
}


/*Ejercicio 19

Escribe un programa que:

    Le pida al usuario un número y cree un arreglo de números empezando en el 1 hasta el número que el usuario ingrese (incluyéndolo)
    Elimine el segundo elemento.
    Recorra e imprima el arreglo.

Ejemplo:

Ingresa un número> 5
1
3
4
5
*/
const number=prompt("Ingrese un numero")

//parseInt(number)
console.log(number)


 arre= [0]

for (i=0; i<=number;i++){
   arre[i] = i
   console.log(arre[i])
   }


/* Ejercicio 20

Imprime la matriz en la consola, el resultado final debe ser el siguiente:

const mat = [
  ["Pablo", "Maria", "Pedro"],
  ["Diana", "Juan", "Federico"],
  ["Roberto", "Daniel", "Sandra"]
];*/

const mat = [
  ["Pablo", "Maria", "Pedro"],
  ["Diana", "Juan", "Federico"],
  ["Roberto", "Daniel", "Sandra"]
];

for(let i=0; i<mat.length; i++){
  console.log(mat[0], "Grupo1")
  console.log(mat[1], "Grupo2")
  console.log(mat[2], "Grupo3")
}

/* Ejercicio 21

Completa el siguiente programa para imprimir los números que sean mayores a 10.

const nums = [1, 23, 5, 8, 40, 12, 2, 67, 24, 9, 39]
// escribe tu código acá

El resultado debería ser el siguiente:

23
40
12
67
24
39
*/

const nums = [1, 23, 5, 8, 40, 12, 2, 67, 24, 9, 39]
// escribe tu código acá
for (let i=0; i<nums.length; i++){
  if (nums[i]>10){
     console.log(nums[i])
  }
  
} 

/* Ejercicio 22

Completa el siguiente programa e imprime la cantidad de unos (1) que haya en el arreglo:

const nums = [1, 0, 1, 1, 1, 0, 0, 1, 0, 1, 1, 0, 0, 1, 0, 1, 0, 1, 1]

El resultado debería ser el siguiente:

11
 */
const nums = [1, 0, 1, 1, 1, 0, 0, 1, 0, 1, 1, 0, 0, 1, 0, 1, 0, 1, 1]

contador=0
for (let i=0; i<nums.length; i++){
  if (nums[i]==1){
    contador++
  }
  
}
console.log(contador)
