/* 
  Importante: 
  No modificar ni el nombre ni los argumetos que reciben las funciones, sólo deben escribir
  código dentro de las funciones ya definidas. 
  No comentar la funcion 
*/
// Escribi una funcion llamada 'repeatCharacters' en el prototypo del objeto global String
// que reciba como parametro un string
// y devuelve un string en donde cada letra se repita una vez.
// Por ej:
// 'hola'.repeatCharacters() devuelve "hhoollaa"
// Tu código aca:

function repetirCaracteres() {
  // Escribi una funcion llamada 'repeatCharacters' en el prototypo del objeto global String
  // que reciba como parametro un string
  // y devuelve un string en donde cada letra se repita una vez.
  // Por ej:
  // 'hola'.repeatCharacters() devuelve "hhoollaa"

  // Tu código aca:
  String.prototype.repeatCharacters = function () {
    let texto = this;
    let str = '';
   
    let array, array2 = [];
    array = texto.split('');
    for (let e of array) {
      array2.push(e);
      array2.push(e);
    }
    str = array2.join('');

    return str
  }
}

// No modifiques nada debajo de esta linea //

module.exports = repetirCaracteres