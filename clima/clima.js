const axios = require('axios');

const getClima = async(lat, lng)=> {
    const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=169235018e75b7794a6549aa8082556e`)

    return resp.data.main.temp
}

module.exports = {
    getClima
}