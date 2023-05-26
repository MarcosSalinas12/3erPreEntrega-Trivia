
let puntuacion;
puntuacion = 0;
 
 let pregunta1;
 pregunta1 = prompt('Quien es el protagonista de breaking bad? (1=Jack Baulter) (2=Walter White) (3=Frank Underwood) (4=Omar Little)');
 if (pregunta1 == 2){
   console.log('Correcto!');
   puntuacion = puntuacion + 1 ;
 } else {
   console.log('incorrecto'); 
}


let pregunta2;
pregunta2 = prompt('Cual es la capital de Canada? (1=Ottawa) (2=Quebec) (3=Toronto) (4=Montreal)');
if (pregunta2 == 1){
   console.log('Correcto!');
   puntuacion = puntuacion + 1 ;
 } else {
   console.log('incorrecto'); 
}

let pregunta3;
pregunta3 = prompt('Cual de los siguientes nombres NO es de un pokemon? (1=Charmander) (2=Snorlax) (3=Patamon) (4=Pichu)');
if (pregunta3 == 3){
   console.log('Correcto!');
   puntuacion = puntuacion + 1 ;
 } else {
   console.log('incorrecto'); 
}

let pregunta4;
pregunta4 = prompt('Cual de los siguientes paises tiene mayor poblacion? (1=India) (2=Estados Unidos) (3=España) (4=Brasil)');
if (pregunta4 == 1){
   console.log('Correcto!');
   puntuacion = puntuacion + 1 ;
 } else {
   console.log('incorrecto'); 
}

let pregunta5;
pregunta5 = prompt('Cual es el simbolo quimico del Oro en la tabla periodica? (1=Ag) (2=Gl) (3=Or) (4=Au)');
if (pregunta5 == 4){
   console.log('Correcto!');
   puntuacion = puntuacion + 1 ;
 } else {
   console.log('incorrecto'); 
}

let pregunta6;
pregunta6 = prompt('Cual de los siguientes actores no gano un premio oscar? (1=Leonardo DiCaprio) (2=Johnny depp) (3=Will Smith) (4=Brad Pitt)');
if (pregunta6 == 2){
   console.log('Correcto!');
   puntuacion = puntuacion + 1 ;
 } else {
   console.log('incorrecto'); 
}

let pregunta7;
pregunta7 = prompt('En que año empieza la segunda Guerra mundial? (1=1939) (2=1914) (3=1945) (4=1954)');
if (pregunta7 == 1){
   console.log('Correcto!');
   puntuacion = puntuacion + 1 ;
 } else {
   console.log('incorrecto'); 
}

let pregunta8;
pregunta8 = prompt('Como es el primer nombre del Señor Burns en los Simpsons? (1=Abraham) (2=Montgomery) (3=Hubert) (4=Moleman)');
if (pregunta8 == 2){
   console.log('Correcto!');
   puntuacion = puntuacion + 1 ;
 } else {
   console.log('incorrecto'); 
}

let pregunta9;
pregunta9 = prompt('En fisica la aceleración de la gravedad se calcula con la formula de: (1= 12.4 m/s2) (2= 15 m/s2) (3= 9.8 m/s2) (4= 0.55 km/s2)');
if (pregunta9 == 3){
   console.log('Correcto!');
   puntuacion = puntuacion + 1 ;
 } else {
   console.log('incorrecto'); 
}

let pregunta10;
pregunta10 = prompt('Cuantos huesos tiene un ser humano adulto? (1= 198) (2= 208) (3= 206) (4= 256)');
if (pregunta10 == 3){
   console.log('Correcto!');
   puntuacion = puntuacion + 1 ;
 } else {
   console.log('incorrecto'); 
}

console.log ('tu puntuacion es de : ' + puntuacion  + "/10" )