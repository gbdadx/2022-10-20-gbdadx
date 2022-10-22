/* 
  Importante: 
  No modificar ni el nombre ni los argumetos que reciben las funciones, sólo deben escribir
  código dentro de las funciones ya definidas. 
  No comentar la funcion 
*/
function puntosDelEquipo(array) {
  // la funcion recibe un array con los resultados de los partidos del campeonato de futbol de un equipo
  // en este formato ["3:1", "2:2", "0:1", ...]
  //la funcion debe calcular y retornar cuantos puntos consiguio el equipo teniendo en cuenta:
  //que su resultado es el primero en cada string
  // un partido ganado suma 3 puntos, empate suma 1 punto, y perder 0!
  // Tu código aca:

  var aux = [];
  var uno, dos, aux4 = 0;
  for (let string of array) {
    aux = string.split(':');
    uno = Number(aux[0]);
    
    dos = Number(aux[1]);
    if (uno === dos) aux4 += 1; 
    else if (uno > dos) aux4 += 3;
    aux=[];
    uno=0;
    dos=0;
  }
  return aux4;
}

// No modifiques nada debajo de esta linea //

module.exports = puntosDelEquipo