

// navigator.geolocation.getCurrentPosition(success, error, {
//     enableHighAccuracy: true
// })
// function success(position) {
//     setupLocation([position.coords.longitude, position.coords.latitude])
//     // console.log(position.coords.longitude,  position.coords.latitude)
// }
// function error(position) {
//     console.log(position)

//     setupLocation([-6.208417, 106.83919])
// }
// function setupLocation(center) {
//     console.log(center)
//     const map = new mapboxgl.Map({
//         container: "map", // container ID
//         style: "mapbox://styles/mapbox/streets-v11", // style URL
//         center: center, // starting position [lng, lat]
//         zoom: 16, // starting zoom
//     });
// }
