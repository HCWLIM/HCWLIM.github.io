function calculateDistances(lat,long){
    let depulze = haversine(lat, long, 2.922561,101.650965)
    let pyramid = haversine(lat, long, 3.073065,101.607787)
    let klcc = haversine(lat, long, 3.158761,101.714524)

    return (depulze, pyramid, klcc)
}

let elLocate = document.getElementById("locate")
elLocate.addEventListener("click", function(){
    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(function(position){
            let elLat = document.getElementById("lat")
            let elLong = document.getElementById("long")
            let elduplze = document.getElementById("depulze")
            let elKlcc = document.getElementById("klcc")
            let elSunway = document.getElementById("sunway")

            let userLat = position.coords.Latitude
            let userLong = position.coords.Longtitude
            
            let distances = calculateDistances(userLat, userLong)

            elLat.innerHTML = "Your Latitude: " + userLat
            elLong.innerHTML = "Your longtitude: " + userLong
            elduplze.innerHTML = "Distance to depulze, Cyberjaya is " + distances[0] + "km"
            elKlcc.innerHTML = "Distance to KLCC is " + distances[2] + "km"
            elSunway.innerHTML = "Distance to Sunway Pyramid is " + distances[1] + "km"

        })
}
    else
{
    alert("Geolocation is not supported")
}
})