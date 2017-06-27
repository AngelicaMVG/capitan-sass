


var api = {
  url: 'http://laboratoria.cuadra.co:9339/api/v1/students/ '
};

var plantillaFinal = '';

var cargarPagina = function() {
  cargarLista();
};

var cargarLista = function() {
  $.getJSON(api.url, function(alumnas) {
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
  "<li>" +
   "<input type='checkbox'> " +
   "__nombre__ " +
   "__mLastName__ " +
   "__pLastName__  "  +
   "</li>";


$(document).ready(cargarPagina);
