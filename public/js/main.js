const cityName = document.getElementById('cityName')
const submitBtn = document.getElementById('submitBtn')
const city_name = document.getElementById('city_name')
const getInfo = async(event) => {
    event.preventDefault()
    let cityVal = cityName.value;
    if (cityVal === "") {
        city_name.innerText = "Please write the City name before search"
    }
    else {
        try{
            let url = 'https://api.openweathermap.org/data/2.5/weather?q=${cityVal}&units=metric&appid=e4863163e62eff3e62c89e63aeeba427'
            const response = await fetch(url);
            const data = await response.json()
            console.log(data)
        }
        catch{
            city_name.innerText = "Please write the City name properly"
        }
    }
}
submitBtn.addEventListener('click', getInfo)