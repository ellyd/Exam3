$(document).ready(function(){
});

	$(".slider").slick({
		dots: true
	});


function initMap() {
        var center = {lat: -7.9304696, lng: 112.6370704};
        var map = new google.maps.Map(document.getElementById('map'), {
          zoom: 14,
          center: center,
          disableDefaultUI: true
        });

        var marker = new google.maps.Marker({
          position: center,
          map: map,
          icon: "../img/marker.png"
        });
}