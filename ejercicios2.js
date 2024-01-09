// Declara una funcion para cada problema planteado

//calcular el perimetro de un circulo

function perimetroDeCirculo( radio){ 
    let pi = 3.1416

    return `El perimetro del circulo es : ${2 *pi* radio}`;
}

// const perimetroDeCirculo = (radio) => ()

// * calcular el area de un rectangulo

function areaDeRectangulo (b,a){
    return `El area de un rectangulo es: ${b * a }`;}

// calcular el cuadrado de un numero

function cuadradoDeUnNumero (a){

return `El cuadrado de equis número es : ${a*a}`;}

//calcular la conversion de grados celsius a farenheit
function conversionCelsiusAFahrenheit (grados){
    let farenheit = (grados*9/5 + 32)

    return `La conversion de grados Celsius a Farenheit son : ${farenheit}`
}

const conversionCelsiusAFahrenheit = grados => (grados*9/5+32)

console.log("La conversion de grados celsius a Farenheit son: "+ grados); 

//* calcular el valor del voltaje dadas la resistencia y la corriente 

function valorVoltaje(I,R){
    let voltaje = I*R;
    return ` El voltaje es : ${ voltaje }`;
}

