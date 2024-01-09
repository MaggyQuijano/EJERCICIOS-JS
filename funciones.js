                        //Funciones
/**
 * Declaracion de funcion 
 * 
 * 1.- Palabra reservada function
 * 2.- Asignar un nombre a nuestra funcion
 * 3.-Colocar parentesis y despues llaves
 * 
 */

function miFuncion(){
    console.log("Mi primer función");
}

//Funcion a quien salude a quien la mande a invocar

function saludarUsuario(nombre) {
    console.log("Hola " + nombre);

}

//Funcion que realice la suma de 4 numeros diferentes

function sumarNumeros(a,b,c,d,){
   return `La suma de los numeros es: ${a+b+c+d}`;
 
}

// let nuevaVariable =20;

// let msg1 ="Hola";
// let msg2 = "Cohort";
// let msg3 ="36";

// let mesgCompleto = `Mensaje completo: ${msg1} ${msg2} ${msg3}`;




                    //FUNCIONES FLECHA 

/**
 * 
 * 1.- Palabra reservada const
 * 2.- asignar nombre
 * 3.- operador de asignacion = y los parametros que recibe esta funcion ()
 * 4.- fat arrow => y llaves {}
 * 
 */

const miFuncionFlecha = () => {console.log("Mi primer función "+ "en JavaScript");}

const sumarNumerosFlecha = (e,g) => (e+g)
