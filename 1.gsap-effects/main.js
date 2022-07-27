
/*
PRIMERA ANIMACIÓN SENCILLA, EN DÓNDE "X" Y "Y" SON LA ABREVIACIÓN DE TRANSLATEX()
TRANSLATEY(), DURATION ES EL NUMERO DE SEGUNDOS QUE DURARÍA LA ANIMACIÓN  
*/

gsap.to(".contenedor", {rotation: 180, x: 200, y: 100, duration: 2});


//lineas de tiempo

//PRIMERO CREAMOS UNA LINEA DE TIEMPO
var tl = gsap.timeline();

//EJECUTAR ANIMACIONES EN ORDEN PROGRESIVO
tl.to(".caja1", {duration: 1.5, x: 10})
  .to(".caja2", {duration: 1, x: 20})
  .to(".caja3", {duration: 1, x: 30})


//INICIALIZAMOS OBJETO

var tween = gsap.to(".caja--ultima", {});



