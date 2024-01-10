// Ejercicios para esta sesion

/** Ejercicio 1
 * 
 * Elabora un programa que determine si una persona tiene edad
 * suficiente para votar
 * 
 * Debe recibir como parametro la edad
 * 
 * Consideraciones: utilizar la estructura if-else
 */


function edadParaVotar (edad){
    if (edad >= 18){
        console.log("Esta persona tiene edad suficiente para votar")
    } else {
        console.log("Esta persona no tiene edad suficiente para votar  ")
    }

}

/** Ejercicio 2
 * 
 * Desarrolla un programa que permita obtener el promedio de un/a alumno/a
 * recibiendo como parametro 4 calificaciones
 * 
 * Si el promedio es aprobatorio (mayor o igual a 7) imprimir aprobado
 * en el caso de que no sea un promedio aprobatorio imprimir reporobado
 * 
 * Consideraciones: utilizar la estructura if-else
 * 
 */

function calificacionAlumno (calif1,calif2,calif3, calif4){

    let promedioAlumno = (calif1+calif2+calif3+calif4) /4 

    if ( promedioAlumno >=7){
        console.log("Aprobado")
    } else{
        console.log("Reprobado")
    }
}

/** Ejercicio 4
 * 
 * Desarrolla un programa que evalue si un numero es divisible
 * entre 7 y 8
 * 
 * Debe recibir como parametro un numero, cual sea
 * 
 * Si se cumple, imprimir verdadero
 * Si no, imprimir falso
 * 
 * 
 * Consideracion - Utilizar la estructura if-else
 * Casos de prueba: 56, 7, 8, 0, 224, 73
 */

function numeroDivisible7y8 (numero){
    
    if (numero % 7 === 0 && numero % 8 ===0){
        console.log (" Verdadero")
    } else {
        console.log ("Falso")
    }
}

numeroDivisible7y8 (56);
numeroDivisible7y8 (7)
numeroDivisible7y8 (8);
numeroDivisible7y8 (0);
numeroDivisible7y8 (224);
numeroDivisible7y8(73);

/** Ejercicio 5
 * 
 * Desarrolla un programa que evalue si un numero es divisible
 * entre 4 o 9
 * 
 * Debe recibir como parametro un numero aleatorio
 * 
 * Si se cumple, imprimir verdadero
 * Si no, imprimir falso
 * 
 * Consideracion - Utilizar la estructura if-else
 */

function numeroDivisible4y9 (numero){
    if( numero % 4 === 0 || numero % 9 === 0){
        console.log ( "Verdadero")
    } else {
        console.log("Falso")
    }
    
}


