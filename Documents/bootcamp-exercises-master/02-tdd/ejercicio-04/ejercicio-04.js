function fibonacci(upperLimit) {
  //Escribe tu codigo aqui
  if ( upperLimit < 0 || typeof upperLimit != 'object' ) {
    return "Error";
  }
  var fib =[];
  var anterior = 0,actual = 1,auxiliar = 1;
  for(i=0; i<=upperLimit;i++){
    fibo.push(actual);
    auxiliar = actual;
    actual = anterior + actual;
    anterior = auxiliar;
  }
}

//NO TOCAR ESTE CODIGO O EXPLOTARA LA PC EN 10 SEGUNDOS
if(typeof exports !== 'undefined') {
    exports.fibonacci = fibonacci;
}
