
function initMap(){
	var map = new google.maps.Map(document.getElementById("myMap"),{
		zoom: 5,
		center: {lat: -9.1191427, lng: -77.0349046},
		mapTypeControl: false,
		zoomControl: false,
		streetViewControl: false
	});

	//llamamos a las ids del origen y fin del recorrido
	var inicio = document.getElementById("origen");
	var fin = document.getElementById("destino");

	//para completar el llenado de los inputs
	var autocomplete = new google.maps.places.Autocomplete(inicio);
	autocomplete.bindTo("bounds",map)

	var autocomplete = new google.maps.places.Autocomplete(fin);
	autocomplete.bindTo("bounds",map)

	document.getElementById("show").addEventListener("click",marcar);

	var geocoder = new google.maps.Geocoder();
	function marcar(){
		if(geocoder){
			geocoder.geocode({'address':inicio.value},geocodeResult);
			geocoder.geocode({'address':fin.value},geocodeResult);
			route();
		}
	}

	

}