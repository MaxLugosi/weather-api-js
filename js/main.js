fetch('https://api.openweathermap.org/data/2.5/weather?id=524894&appid=cf14ea3a0a38b66ebe36da2d7526c2c8')
    .then(
        function (resp) {
            return resp.json();
        }
    )
    .then(
        function (data) {
            document.querySelector('.weather__title').textContent = data.name;
            document.querySelector('.temperature').innerHTML = Math.round(data.main.temp - 273) + '&deg;';
            document.querySelector('.clouds').textContent = data.weather[0]['description'];
        }
    );