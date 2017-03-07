function translate(){
  var title = document.getElementById('form-signin-heading');
  var email = document.getElementById('inputEmail');
  var password = document.getElementById('inputPassword');
  var remember = document.getElementsByTagName('span')[0];
  var button = document.getElementsByClassName('btn')[0];
  title.innerHTML = "Por favor inicia sesión";
  email.placeholder = "Correo Electrónico";
  password.placeholder = "Contraseña";
  remember.innerHTML = "Recordar datos";
  button.innerHTML = "Iniciar Sesión";
}
function MuestraDatos(){
  var mail = inputEmail.value;
  var pass = inputPassword.value;
  Titulo.innerHTML = "Datos de formulario";
  resultado.innerHTML = "El correo electrónico ingresado es: <br><br>" + mail + "<br><br> La clave ingresada es: <br><br>" + pass;

}
translate();
