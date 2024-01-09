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

function calificacionAlumno (califPrimerParcial,califSegundoParcial,califTercerParcial, califCuartoParcial){
    let promedioAlumno = (califPrimerParcial*califSegundoParcial*califTercerParcial* califCuartoParcial /4 )

    if ( promedioAlumno >=7){
        console.log("Aprobado")
    } else{
        console.log("Reprobado")
    }
}


