window.addEventListener('load',function(){
var coders = [{NameFile:"anais-araya",TypeFile: ".jpg",Category:"4",Country:"Chile",City:"Santiago"},
              {NameFile:"andrea-miranda",TypeFile: ".jpg",Category:"4",Country:"Chile",City:"Santiago"},
              {NameFile:"berenisse-ríos",TypeFile: ".jpg",Category:"4",Country:"Chile",City:"Santiago"},
              {NameFile:"caterina-da-silva",TypeFile: ".jpg",Category:"4",Country:"Chile",City:"Santiago"},
              {NameFile:"daniela-sanchez",TypeFile: ".jpg",Category:"4",Country:"Chile",City:"Santiago"},
              {NameFile:"francisca-ojeda",TypeFile: ".jpg",Category:"4",Country:"Chile",City:"Santiago"},
              {NameFile:"katerine-sandoval",TypeFile: ".jpg",Category:"4",Country:"Chile",City:"Santiago"},
              {NameFile:"andrea-cabrera",TypeFile: ".jpg",Category:"5",Country:"Peru",City:"Lima"},
              {NameFile:"ariadna-izaguirre",TypeFile: ".jpg",Category:"5",Country:"Peru",City:"Lima"},
              {NameFile:"carito-juarez",TypeFile: ".jpg",Category:"5",Country:"Peru",City:"Lima"},
              {NameFile:"cristy-castro",TypeFile: ".jpg",Category:"5",Country:"Peru",City:"Lima"},
              {NameFile:"karol-orrillo",TypeFile: ".jpg",Category:"5",Country:"Peru",City:"Lima"},
              {NameFile:"paola-ortiz",TypeFile: ".jpg",Category:"5",Country:"Peru",City:"Lima"},
              {NameFile:"teresa-lara",TypeFile: ".jpg",Category:"5",Country:"Peru",City:"Lima"},
              {NameFile:"arantza-burga",TypeFile: ".jpg",Category:"6",Country:"Peru",City:"Lima"},
              {NameFile:"daguiana-revoredo",TypeFile: ".jpg",Category:"6",Country:"Peru",City:"Lima"},
              {NameFile:"elizabeth-condori",TypeFile: ".jpg",Category:"6",Country:"Peru",City:"Lima"},
              {NameFile:"grecia-rayme",TypeFile: ".jpg",Category:"6",Country:"Peru",City:"Lima"},
              {NameFile:"janine-vega",TypeFile: ".jpg",Category:"6",Country:"Peru",City:"Lima"},
              {NameFile:"michelle-more",TypeFile: ".jpg",Category:"6",Country:"Peru",City:"Lima"},
              {NameFile:"mishel-velasquez",TypeFile: ".jpg",Category:"6",Country:"Peru",City:"Lima"},
              {NameFile:"rosario-felix",TypeFile: ".jpg",Category:"6",Country:"Peru",City:"Lima"},
            ];
 var listado=document.getElementById('ListaCoders');
//console.log(coders[4].Category + coders[4].Country);
 function CreaListado(seleccionado){
   //var opcion = seleccion.value;
  //alert("chie");
   coders.forEach(function(alumna){
    var directorio = alumna.Category + alumna.City+alumna.Country;
    var file = alumna.NameFile+alumna.TypeFile;
  //  console.log(directorio);
  //  console.log(file);
if (directorio == seleccionado) {
  var img = document.createElement('img');
  img.className="fotografia";
  img.setAttribute("src","assets/img/" + directorio + "/"+ file);
  listado.appendChild(img);
}
   });

 }
CreaListado("4SantiagoChile");
CreaListado("5LimaPeru");
CreaListado("6LimaPeru");
var seleccion = document.getElementById('select');
    seleccion.onchange = function(){
     if (seleccion.value == "4SantiagoChile") {
       listado.innerHTML = "";
       CreaListado("4SantiagoChile");
     }
     if (seleccion.value == "5LimaPeru") {
       listado.innerHTML = "";
       CreaListado("5LimaPeru");
     }
     if (seleccion.value == "6LimaPeru") {
       listado.innerHTML = "";
       CreaListado("6LimaPeru");
     }
    }
});
