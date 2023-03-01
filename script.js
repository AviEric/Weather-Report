const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': '38dda11884msh5619d5396baa9b6p17b8aajsn6229f9c0777d',
        'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
    }
};
const getWeather = (city) => {
    cityName.innerHTML = city
    fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' + city, options)
        .then(response => response.json())
        .then(response => {

            console.log(response)
            //cloud_pct.innerHTML = response.cloud_pct
            feels_like.innerHTML = response.feels_like
            humidity.innerHTML = response.humidity
            humidity2.innerHTML = response.humidity
            max_temp.innerHTML = response.max_temp
            min_temp.innerHTML = response.min_temp
            sunrise.innerHTML = response.sunrise
            sunset.innerHTML = response.sunset
            temp.innerHTML = response.temp
            temp2.innerHTML = response.temp
            wind_degrees.innerHTML = response.wind_degrees
            wind_speed.innerHTML = response.wind_speed
            wind_speed2.innerHTML = response.wind_speed
        })
        .catch(err => console.error(err));
}

submit.addEventListener("click", (e) => {
    e.preventDefault()
    getWeather(city.value)
})
getWeather("Delhi")

fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Shanghai', options)
    .then(response => response.json())
    .then(response => {

        console.log(response)
        Shanghaicloud_pct.innerHTML = response.cloud_pct
        Shanghaifeels_like.innerHTML = response.feels_like
        Shanghaihumidity.innerHTML = response.humidity

        Shanghaimax_temp.innerHTML = response.max_temp
        Shanghaimin_temp.innerHTML = response.min_temp
        Shanghaisunrise.innerHTML = response.sunrise
        Shanghaisunset.innerHTML = response.sunset
        Shanghaitemp.innerHTML = response.temp

        Shanghaiwind_degrees.innerHTML = response.wind_degrees
        Shanghaiwind_speed.innerHTML = response.wind_speed

    })

fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Boston', options)
    .then(response => response.json())
    .then(response => {

        console.log(response)
        Boston_cloud_pct.innerHTML = response.cloud_pct
        Boston_feels_like.innerHTML = response.feels_like
        Boston_humidity.innerHTML = response.humidity

        Boston_max_temp.innerHTML = response.max_temp
        Boston_min_temp.innerHTML = response.min_temp
        Boston_sunrise.innerHTML = response.sunrise
        Boston_sunset.innerHTML = response.sunset
        Boston_temp.innerHTML = response.temp

        Boston_wind_degrees.innerHTML = response.wind_degrees
        Boston_wind_speed.innerHTML = response.wind_speed

    })
fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Lucknow', options)
    .then(response => response.json())
    .then(response => {

        console.log(response)
        Lucknow_cloud_pct.innerHTML = response.cloud_pct
        Lucknow_feels_like.innerHTML = response.feels_like
        Lucknow_humidity.innerHTML = response.humidity

        Lucknow_max_temp.innerHTML = response.max_temp
        Lucknow_min_temp.innerHTML = response.min_temp
        Lucknow_sunrise.innerHTML = response.sunrise
        Lucknow_sunset.innerHTML = response.sunset
        Lucknow_temp.innerHTML = response.temp

        Lucknow_wind_degrees.innerHTML = response.wind_degrees
        Lucknow_wind_speed.innerHTML = response.wind_speed

    })
    fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Kolkata', options)
    .then(response => response.json())
    .then(response => {

        console.log(response)
        Kolkata_cloud_pct.innerHTML = response.cloud_pct
        Kolkata_feels_like.innerHTML = response.feels_like
        Kolkata_humidity.innerHTML = response.humidity
        
        Kolkata_max_temp.innerHTML = response.max_temp
        Kolkata_min_temp.innerHTML = response.min_temp
        Kolkata_sunrise.innerHTML = response.sunrise
        Kolkata_sunset.innerHTML = response.sunset
        Kolkata_temp.innerHTML = response.temp
        
        Kolkata_wind_degrees.innerHTML = response.wind_degrees
        Kolkata_wind_speed.innerHTML = response.wind_speed

    })