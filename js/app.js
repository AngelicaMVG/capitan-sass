$(document).ready(cargarPagina);


var api = {
  url: 'http://laboratoria.cuadra.co:9339/api/v1/students/ '
};

var plantillaFinal = '';
var arregloAlumnas = [];

var cargarPagina = function() {
  cargarLista();
};

var cargarLista = function() {
  $.getJSON(api.url, function(alumnas) {
    arregloAlumnas = alumnas;
    alumnas.forEach(mostrarAlumnas);
  });
};

var mostrarAlumnas = function(alumna) {
  var name = alumna.name;
  var pLastName = alumna.pLastName;
  var mLastName = alumna.mLastName;
  var id = alumna.id;
  plantillaFinal = plantilla.replace("__nombre__", name)
  .replace("__pLastName__", pLastName)
  .replace("__mLastName__", mLastName);

    $('#asistencia').append(plantillaFinal);
};


var plantilla=
  "<li> __nombre__ , __mLastName__ , __pLastName__ <input type='checkbox'> </li>";
