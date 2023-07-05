<template>
    <div class="weather-comp">
        <div class="search-bar">
            <input type="text" v-model="cityName" @keypress="enterFunction">
            <i class="fa fa-search" aria-hidden="true"></i>
        </div>
        <p v-if="celsiusData > 0">{{ celsiusData }}°C</p>
        <p v-if="fahrenheitData > 0">{{ fahrenheitData }}°F</p>
        <p>Description: {{ description }}</p>
        <P>Visibility: {{ convertVisibility }} km</P>
        <P>Wind Speed: {{ convertSpeed }} km</P>
        <P>Pressure: {{ pressure }} hPa</P>
        <P>Humidity: {{ humidity }}%</P>
    </div>
</template>

<script>

export default {
    name: 'weather-component',
    data() {
        return {
            weather: '',
            cityName: '',
            error: '',
            description: '',
            date: '',
            visibility: '',
            windSpeed: '',
            pressure: '',
            humidity: ''
        }
    },
    computed: {
        celsiusData() {
            return this.weather == '' ? '' : Math.round(this.weather - 273.15)
        },
        fahrenheitData() {
            return Math.round((this.weather - 273.15) * (9/5) + 32 )
        },
        getDate() {
            return new Date().getDay()
        },
        convertVisibility() {
            return this.visibility/ 1000
        },
        convertSpeed() {
            return Math.round(this.windSpeed * 3600 / 1000)
        }
    },
    methods: {
        enterFunction(e) {
            if(e.key === "Enter") {
                const apiKey = 'ace526a3c569b00441f622e36ca31bde'
                fetch(`https://api.openweathermap.org/data/2.5/weather?q=${this.cityName}&appid=${apiKey}`)
                    .then(res => res.json())
                    .then(data => {
                        this.weather = data.main.temp
                        this.description = data.weather[0].description
                        this.visibility = data.visibility
                        this.windSpeed = data.wind.speed
                        this.pressure = data.main.pressure
                        this.humidity = data.main.humidity
                        console.log(data)
                    })
                    .catch(() => alert('Invalid city name'))
            }
        }
    },
    mounted() {
        // const apiKey = 'ace526a3c569b00441f622e36ca31bde'
        // fetch(`https://api.openweathermap.org/data/2.5/weather?q=london&appid=${apiKey}`)
        //     .then(res => res.json())
        //     .then(data => {
        //         this.weather = data.main.temp
        //         this.description = data.weather[0].description
        //         this.visibility = data.visibility
        //         this.windSpeed = data.wind.speed
        //         this.pressure = data.main.pressure
        //         this.humidity = data.main.humidity
        //         console.log(data)
        //     })
    }
}
</script>

<style>
.weather-comp {
    /* border: 1px solid red; */
    display: flex;
    flex-direction: column;
    align-items: center;
}
.search-bar {
    border: 2px solid grey;
    border-radius: 5px;
}
.search-bar i {
    margin-right: 10px;
    color: grey;
}
input {
    height: 30px;
    width: 250px;
    border-radius: 10px;
    padding-left: 10px;
    font-size: 1rem;
    border: none;
    outline: none;
}
</style>