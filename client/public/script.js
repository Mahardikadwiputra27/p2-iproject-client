mapboxgl.accessToken =
    "pk.eyJ1IjoibWFoYXJkaWthZHdpcHV0cmExMyIsImEiOiJja3p6MW1hMG4wNDdpM3BwYmdsY3ZqaXd4In0.vs-DzV-aeM8q6BPONXrcbA";

navigator.geolocation.getCurrentPosition(success, error, {
    enableHighAccuracy:true
})
function success(position) {
    setupLocation([position.coords.longitude, position.coords.latitude])
    console.log(position.coords.longitude)
}
function error(position) {
    console.log(position)

    setupLocation([-6,208417, 106,83919])
}
function setupLocation(center){
    const map = new mapboxgl.Map({
        container: "map", // container ID
        style: "mapbox://styles/mapbox/streets-v11", // style URL
        center: center, // starting position [lng, lat]
        zoom: 16, // starting zoom
    });
}
