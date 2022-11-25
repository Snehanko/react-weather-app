import React, { useEffect, useState } from 'react'
import axios from 'axios';
import './weather.scss';
import Modal from '../modal/Modal';

function Weather() {

  const APIkey= '895b84687fcddc3e0be9289362976c63';
  //https://api.openweathermap.org/data/2.5/weather?q=${this.city},${this.state}&units=metric&appid=${this.apiKey}
  const URL=`https://api.openweathermap.org/data/2.5/weather?q=Durgapur,India&units=metric&appid=${APIkey}`;
  


  const [weatherData,setWeatherData]=useState({});

  const [cityData,setCityData]=useState({ //parent State needed to change according to child state
    cityName:'Durgapur',
    country:'India'
  })

  // useEffect(()=>{
  //     getApiData()
  // },[]);

  // const getApiData = () =>{
  //   axios.get(URL).then((response)=>{
  //       setWeatherData(response.data);   
  //       console.log(weatherData.weather[0].icon) 
  //     })
  //     .catch((err)=>{alert(err)});
  // }

  //const iconURL=`https://openweathermap.org/img/w/${weatherData.weather[0].icon}.png`;

  return (
    <>
      <Modal porps={setCityData}/> 
      {console.log(cityData)}
      <div className='container'>

        <div>
        </div>

        <div>
            <h1>CityName,CountryName</h1>
            <h2>Weather</h2>
            <h2>Tempearture</h2>      
            {/* <img src={iconURL}/> */}
            <div className='detail-container'>
            <h3>Humidity</h3>
            <h3>Pressure</h3>
            <h3>Feels Like</h3>
            <h3>WindSpeed</h3>
          </div>
        </div>
      
      <button>Change Location</button>
    </div>
    </>
    
  )
}

export default Weather
