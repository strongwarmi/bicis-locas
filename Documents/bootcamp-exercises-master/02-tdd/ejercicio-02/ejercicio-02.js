function busquedaLinear (array,itemToSearch) {
  //Escribe tu codigo aqui
  if (array == undefined || itemToSearch == undefined) {
    return "Error";
  }
  if (typeof array === 'string') {
    return "Error de dato";
  }
  var index= array.indexOf(itemToSearch);
  if (array[index] == itemToSearch) {
      return index;
    }else {
      return false;
    }
}
//NO TOCAR ESTE CODIGO O EXPLOTARA LA PC EN 10 SEGUNDOS
if(typeof exports !== 'undefined') {
    exports.busquedaLinear = busquedaLinear;
}
