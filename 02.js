/* 
  Importante: 
  No modificar ni el nombre ni los argumetos que reciben las funciones, sólo deben escribir
  código dentro de las funciones ya definidas. 
  No comentar la funcion 
*/
function vegan(invitados) {

// La funcion llamada "vegan" recibe como argumento un objeto 'invitados', en el objeto tenemos objetos que representan los invitados
// a una fiesta en donde todos tienen una propiedad "vegan" con un boolean.
// debe retornar la cantidad de invitados que son vegan.
// Por ej:
// let invitados = {
//     Luna: {
//         vegan: false
//     },
//     Sebas: {
//         vegan: false
//     },
//     Marce: {
//         vegan: false
//     },
//     Nicky: {
//         vegan: true
//     }
// };
// vegan(invitados) devuelve 1
// Tip: Podes usar el metodo for...in
// Tu código aca:
  var uno=(Object.entries(invitados).map(([key,value])=> value.vegan));
  let aux=0;
  for(let e of uno){
    if(e==true) aux++;

  }
return aux;
}

// No modifiques nada debajo de esta linea //

module.exports = vegan