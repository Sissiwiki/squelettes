
$('#myModal').on('shown.bs.modal', function() {
    initialize();
});


function initialize() {
    var mapCanvas = document.getElementById('map_canvas');
    var myLatLng = new google.maps.LatLng(12.747119,77.80394);
    var mapOptions = {
        center: myLatLng,
        zoom: 15,
        mapTypeId: google.maps.MapTypeId.ROADMAP,
        zoomControl: true,
        zoomControlOptions: {
            style: google.maps.ZoomControlStyle.LARGE
        }
    }
    try {
        var map = new google.maps.Map(mapCanvas, mapOptions);
        var marker = new google.maps.Marker({
            position: myLatLng,
            map: map,
            title:"We are here"

        });

    } catch (err) {
        // Error Handling
    }
}