window.addEventListener("load", () => {
    let lon;
    let lat;
    let apiKey = "28c2aab6489ede3ef4c5ecc8467fc278";
    let api;

    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(onSuccess, onError);
        requestApi()
    }

    function onSuccess(position) {
        lon = position.coords.longitude;
        lat = position.coords.latitude;
    }

    function onError(error) {
        alert("Permission got denied")
    }

    function requestApi() {
        api = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}`
        console.log(api)
        fetch(api).then(response => response.json()).then(result => weatherDetails(result))
    }

    function weatherDetails(info) {
        console.log(info);
    }

});