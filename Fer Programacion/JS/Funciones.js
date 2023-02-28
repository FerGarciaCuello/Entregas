
// document.getElementById('boton').onclick = function () {
//     console.log ("capturamos el evento clik")
//     document.getElementById ("demo").innerHTML="como lo estoy haciendo?"
//    }
 
document.getElementById('boton').onclick = function () {
let listadeclase = document.getElementById('info-texto').classList;
if (listadeclase.length == 1) {
    listadeclase.remove("ocultar");
}
else {
    listadeclase.add("ocultar");
}
}