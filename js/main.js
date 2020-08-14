
$('.navbar .dropdown > a').click(function() {
	   location.href = this.href;
});
// search button
$(document).ready(function() {
 
	$(".fa-search").click(function() {
	   $(".togglesearch").toggle();
	   $("input[type='text']").focus();
	 });
 
});


//  map script

function initMap() {
	// The location of Uluru
	var Rwanda = { lat: -1.9403, lng: 29.8739 };
	var Kenya = { lat: -0.0236, lng: 37.9062 };
	var Nigeria = { lat: 9.0820, lng: 8.6753 };
	var icon1 = {
		url: '../img/celine.jpeg', // url
		scaledSize: new google.maps.Size(50, 50), // scaled size
		origin: new google.maps.Point(0, 0), // origin
		anchor: new google.maps.Point(30, 30)
	}
	var icon2 = {
		url: '../img/cynthia.jpg', // url
		scaledSize: new google.maps.Size(50, 50), // scaled size
		origin: new google.maps.Point(0, 0), // origin
		anchor: new google.maps.Point(0, 0)
	}

	var icon3 = {
		url: '../img/ibitope.jpeg', // url
		scaledSize: new google.maps.Size(50, 50), // scaled size
		origin: new google.maps.Point(0, 0), // origin
		anchor: new google.maps.Point(0, 0)
	}
	var icon4 = {
		url: '../img/Nekesa.png', // url
		scaledSize: new google.maps.Size(50, 50), // scaled size
		origin: new google.maps.Point(0, 0), // origin
		anchor: new google.maps.Point(0, 0)
	}


	var mapOptions = {
		zoom: 4,
		center: Rwanda,
		zoom: 4,
		center: Kenya,
		zoom: 4,
		center: Nigeria
	}
	// The map, centered at Uluru
	var map = new google.maps.Map(
		document.getElementById('map'), mapOptions);
	var marker = new google.maps.Marker({
		title: "Rwanda",
		position: Rwanda,
		icon: icon1
	});
	var marker2 = new google.maps.Marker({
		position: Kenya,
		title: "Kenya",
		icon: icon4
	});
	var marker3 = new google.maps.Marker({
		position: Nigeria,
		title: "Nigeria",
		icon: icon3
	});
	var marker4 = new google.maps.Marker({
		title: "Rwanda",
	  position: Rwanda,
	  icon: icon2
  });
	marker.setMap(map);
	marker2.setMap(map);
	marker3.setMap(map);
	marker4.setMap(map);

}
 