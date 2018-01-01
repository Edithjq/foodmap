$(document).ready(function(){

	var carnes = {"personas": [
	{"nombre":"jorge","edad":23},
	{"nombre":"../assets/img/postre3.jpg","edad":20}
]};
$("#content").text(carnes.personas[1].nombre + " " + carnes.personas[0].nombre);


});

 