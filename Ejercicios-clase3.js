/* 12. Escribe un programa que le pida al usuario ingresar una frase. El programa debe imprimir la frase en la consola 10 veces.

Nota: utiliza un ciclo para imprimir la frase las 10 veces. */

let phrase= prompt("Ingrese una frase:")
let i=0
while (i<11){
  console.log(phrase, i)
  i=i+1
}

/*13. Escribe un programa que le pida al usuario una frase y un número. El programa debe imprimir la frase en la consola el número de veces que ingresó el usuario.

Por ejemplo, si el usuario ingresó la frase "Hola Mundo" y el número 5, el programa debe imprimir "Hola Mundo" 5 veces: */

let p= prompt("Ingrese una frase:")
let m= prompt("Ingrese un numero:")
let i2=0
for (i2=1; i2<=m; i2++){
  console.log(p)
}

/* 14. Escribe un programa para la consola que le pida al usuario un número e imprima los números desde 1 hasta el número.

Por ejemplo, si el usuario ingresa el número 5, el programa de be imprimir:*/

const numm= parseInt(prompt("Ingrese un numero:"))
for (i3=1; numm<i3; i3++){
  console.log(i3)
}

/* 15. Escribe un programa para la consola que le pida al usuario dos números e imprima en la consola los números en ese rango. Por ejemplo, si el usuario ingresa 5 como primer número y 10 como segundo número, el programa debe imprimir: 
5
6
7
8
9
10

Nota 1: Puedes asumir que el primer número siempre va a ser menor o igual que el segundo.

Nota 2: Fíjate que se imprimen también los números en los límites, en el ejemplo el 5 y el 10.*/

const me= parseInt(prompt("Ingrese un numero 1:"))
const mi= parseInt(prompt("Ingrese un numero 2:"))

for (i4=me; i4<=mi; i4++){
  console.log(i4)
}

/* 16.Escribe un programa que:

    Le pida al usuario un string (una cadena de texto).
    Si el string es "salir" (todo en minúsculas) el programa debe imprimir en la consola "Hasta pronto!" y terminar.
    De lo contrario imprime en la consola lo que el usuario ingresó y repite el proceso desde el paso 1.
*/

let str= (prompt("Ingrese cadena texto:"))

while(str!="salir"){
  console.log(str)
}
console.log("Hasta pronto!")

/* 17. 

Escribe un programa que piense un número de forma aleatoria y le pida al usuario que lo trate de adivinar (como en uno de los ejercicios anteriores). La diferencia es que esta vez el usuario puede intentar indefinidamente hasta que encuentre el número.*/


usuario=prompt("Hola, piensa un numero")
parseInt(usuario)//Numero ingresado

number3=Math.floor(Math.random() * (10 - 1) + 1)
parseInt(number3)//Numero aelatorio

console.log(number3)

while(number3!=usuario){
  usuario=promt("Piensa otro numero")
}
 console.log("Felicitaciones ese era!")
