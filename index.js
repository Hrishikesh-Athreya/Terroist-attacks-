var payload=""
$.ajax({
	"url":"http://127.0.0.1:5000/output",
	success:function(result){
		console.log(result)
		payload=JSON.parse(result)
		createMap()
	},
	error:function(err){

	}
})
function createMap(){
	// var mymap = L.('mapid').setView([payloud[0].city_lay,paylod[0].city_long,S]);
var mymap = L.map('mapid').setView([payload[0].latitude, payload[0].longitude], 5);
// var marker = L.marker([51.5, -0.09]).addTo(mymap);
// var circle = L.circle([51.508, -0.11], {
//     color: 'red',
//     fillColor: '#f03',
//     fillOpacity: 0.5,
//     radius: 500
// }).addTo(mymap);
	L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox.streets',
    accessToken: ''//Access token here
}).addTo(mymap);
	
	for(var i=0;i<300;i++){
		var marker;
		marker = L.marker([payload[i].latitude,payload[i].longitude]).addTo(mymap)
		marker.bindPopup(payload[i].city_names +"<br>"+ payload[i].TOA+"TOA").openPopup();
	var circle = L.circle([payload[i].latitude,payload[i].longitude],{
		color:'red',
		fillColor:'#f03',
		fillOpacity:0.5,
		radius: 500
	}).addTo(mymap);	
	}
}
