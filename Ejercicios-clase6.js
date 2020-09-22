//Ejercicio 29

//Escribe una función llamada suma que reciba dos números y retorne la suma de los dos números.

// escribe la función suma acá
function suma(numero1, numero2){
  let suma = numero1+ numero2;
  return(suma)
}


// código de prueba, verifica que aparezcan los valores correctos en la consola
console.log(suma(1, 2)) // 3
console.log(suma(0, 0)) // 0
console.log(suma(245, 923)) // 1168

//Ejercicio 30

//Escribe una función llamada hola que reciba un argumento (una cadena de texto) y retorne "Hola " seguido del argumento y un signo de exclamación.

// escribe la función hola acá
function hola(nombre){
 return `Hola ${nombre} !`
}

// código de prueba
console.log(hola("Pedro")) // "Hola Pedro!"
console.log(hola("Juan")) // "Hola Juan!"
console.log(hola("")) // "Hola !"


//Ejercicio 31

//El índice de masa corporal (IMC), o BMI por sus siglas en inglés, es un valor que determina la cantidad de grasa de una persona.

//El BMI se calcula con la siguiente formula:

//peso / altura^2

//Escribe una función llamada bmi que reciba dos argumentos: peso y altura. Utiliza la fórmula para retornar el BMI correspondiente.

// escribe la función bmi acá
function bmi(peso, altura){
  let bmi= peso / Math.pow(altura, 2);
 return bmi;
}

// código de prueba
console.log(bmi(65, 1.8)) // 20.061728395061728
console.log(bmi(72, 1.6)) // 28.124999999999993
console.log(bmi(52, 1.75)) //  16.979591836734695


//Ejercicio 32

/*La función calcularColor recibe un número como argumento y retorna un string de acuerdo al número:

    Si el número es 1 retorna "El color es negro".
    Si el número es 2 retorna "El color es blanco".
    Si el número es 3 retorna "El color es azul".
    De lo contrario retorna "El color es verde".

El problema es que la función tiene algunos errores y no está funcionando. Tu misión es corregirla para que funcione correctamente según lo anterior.*/

function calcularColor(num, color) {
  if (num == 1) {
    color = "black";
  } else if (num == 2){
    color = "blanco";
  } else if (num == 3){
    color = "azul";
  } else {
    color = "verde";
  }

  return `El color es  ${color}`;
}

// código de prueba
console.log(calcularColor(1)) // "El color es negro"
console.log(calcularColor(2)) // "El color es blanco"
console.log(calcularColor(3)) // "El color es azul"
console.log(calcularColor(8)) // "El color es verde"


//Ejercicio 33

//Escribe una función llamada capitalizar que reciba una cadena y capitalice cada palabra de la cadena.

//Nota: puedes asumir que cada palabra está separada por espacio.

// escribe la función acá
function capitalizar(frase){
	let fraseCapitalizada = '';
	for (let i = 0; i < frase.length; i++){
		if (i === 0){
			fraseCapitalizada += frase[i].toUpperCase();
		} else if (frase[i] === " "){
			fraseCapitalizada += frase[i];
			i++;
			fraseCapitalizada += frase[i].toUpperCase();
		} else{
			fraseCapitalizada += frase[i];
		}
	}
	return fraseCapitalizada;
}

// código de prueba
console.log(capitalizar("pedro perez")) // "Pedro Perez"
console.log(capitalizar("make it real")) // "Make it Real"


// Ejercicio 34

//Escribe una función llamada promedio que reciba un arreglo de números y retorne el promedio los elementos.

// escribe la función acá
function promedio(arreglo){
  let promedio=0
  for(let i=0;i<arreglo.length;i++){
    promedio=promedio+arreglo[i]
  }
  return(prommedio/arreglo.length)
}
// código de prueba
console.log(promedio([1, 2, 3, 4])) // 2.5
console.log(promedio([7, 8, 9])) // 8
console.log(promedio([300, 100])) // 200
