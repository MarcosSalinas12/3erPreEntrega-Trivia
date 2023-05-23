//// Tipos de Booleana

let variableBooleana;

variableBooleana = false;

variableBooleana = true;

///sintaxis condicional = if

 ///bloque de codigo

 if (variableBooleana) {

    console.log('Este codigo se va porque variableBooleana es true');

 }

 console.log('resto del codigo.........');

///
 let numero1;
 let numero2;
 let resultado;
 let suma;

 numero1 = 7;
 numero2 = 7;

 resultado = numero1 == numero2;

 suma = numero1 + numero2

 console.log("numero1=numero2?: " +  resultado);

 console.log("numero1+numero2?: " +  suma);

 console.log(numero1 + '===' + numero2 + '? : ' + resultado)

 let edad

 edad = prompt('Ingrese su edad');

 if (edad >= 18){
   console.log('Ingresando a la plataforma de bebidas alcoholicas....');
 } else {
   console.log('Acceso denegado'); 
}

let nombredeusuario = prompt('Ingrese nombreusuario')

if (nombredeusuario == '') {
   alert('No ingresaste ningun nombre de usuario');
} else {
   alert('Nombre de usuario ingresado ' + nombredeusuario);
}

//// if-else anidados

let nombrepagina
let contraseña

nombrepagina = prompt('Ingrese su nombre de pagina');

if (nombrepagina != '') {

   contraseña = prompt('Ingrese su contraseña');

   if (contraseña != '')
   {
      console.log('El usuario ingreso datos en el nombre y contraseña');
   } else {
      console.log('La contraseña esta vacia')
   }
   
} else {
   console.log('El usuario ingreso un nombre vacio')
}


let a = 10
let b = 2

if (a % b == 0) {
   console.log8('A no es divisible por B')
}
else {
   console.log ('A no es divisible por B')
}


!!!""