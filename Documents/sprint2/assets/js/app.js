var name;
var sprint = "";
if (name = " ") {
	name = prompt("Hola, por favor ingresa tu nombre:");
	usuario.innerHTML = name;
}
// dropdown
function myFunction() {
	document.getElementById("myDropdown").classList.toggle("show");
}
window.onclick = function(event) {
	if (!event.target.matches('.dropbtn')) {
		var dropdowns = document.getElementsByClassName("dropdown-content");
		for (var i = 0; i < dropdowns.length; i++) {
			var openDropdown = dropdowns[i];
			if (openDropdown.classList.contains('show')) {
				openDropdown.classList.remove('show');
			}
		}
	}
}
//se ejecuta por defecto el sprint actual
Sprint2();
//Contenido sprint 1
function Sprint1(){
	TituloSprint.innerHTML = "Sprint 1 : Introducción a JavaScript";
	silabuss.innerHTML = "<ol><li>Fundamentos de programación</li><li>Funciones</li><li>Arreglos</li><li>Objetos</li></ol>";
	pregunta1.innerHTML = " Existen dos tipos de funciones";
	opcion1.innerHTML = " Expresadas y declaradas";
	opcion2.innerHTML = " Explicitas y declaradas";
	opcion3.innerHTML = " Expresadas y derivadas";
	pregunta2.innerHTML = " Elije una propiedad de los arreglos";
	opcion4.innerHTML = " clear";
	opcion5.innerHTML = " pop";
	opcion6.innerHTML = " add";
	pregunta3.innerHTML = " Un objeto tiene _____ y ____";
	opcion7.innerHTML = " números y letras";
	opcion8.innerHTML = " partes y validaciones";
	opcion9.innerHTML = " propiedades y valores";
	sprint = "1";
}
//Contenido sprint 2
function Sprint2(){
	TituloSprint.innerHTML = "Sprint 2 : Introducción al desarrollo web y constrcción de páginas web";
	silabuss.innerHTML = "<ol><li>Ciclo de vida del desarrollo web y arquitectura cliente/servidor</li><li>HTML y Javascript en el navegador</li><li>Manejo de comandos básicos de git en la terminal</li><li>Pruebas unitarias</li><li>Git/ Resolucion de conflictos / Branching Model</li><li>DOM</li></ol>";
	pregunta1.innerHTML = "¿Cuál es el comando para iniciar un repositorio desde la consola?";
	opcion1.innerHTML = " git init";
	opcion2.innerHTML = " git init .";
	opcion3.innerHTML = " git init add";
	pregunta2.innerHTML = "¿Cuál es la fiinalidad de hacer una prueba unitaria?";
	opcion4.innerHTML = " Comprobar que el código funciona correctamente";
	opcion5.innerHTML = " Darle valores a los parámetros de dichas funciones";
	opcion6.innerHTML = " No tiene ningun fin";
	pregunta3.innerHTML = "Que significa DOM";
	opcion7.innerHTML = " Dual Object Model";
	opcion8.innerHTML = " Document Object Model";
	opcion9.innerHTML = " Document Obsolet Model";
	sprint = "2";
}
//Contenido sprint 3
function Sprint3(){
	ContenedorTemas.innerHTML = "<h3>El silabuss de este sprint no esta disponible</h3>";
}
