import React, { useEffect, useState } from 'react'
import axios from 'axios';
import './weather.scss';

function Weather() {

  const [weatherData,setWeatherData]=useState();

  const [cityData,setCityData]=useState({ 
    city:'Durgapur',
    country:'India'
  })

  const APIkey= '895b84687fcddc3e0be9289362976c63';
  const URL=`https://api.openweathermap.org/data/2.5/weather?q=${cityData.city},${cityData.country}&units=metric&appid=${APIkey}`;

  const handleChange=(e)=>{
      setCityData({...cityData,[e.target.name]:e.target.value});
  }

  const handleClick=()=>{
      axios.get(URL)
      .then((response)=>{
        setWeatherData(response.data);
        console.log(weatherData);
      })
      .catch((err)=>console.log(err));
  }

  useEffect(()=>{
      
      handleClick();
  },[])
  
  //const iconURL=`https://openweathermap.org/img/w/${weatherData.weather[0].icon}.png`;

  return (
      <div className='container'>
        <div className='search-container'>
              <div className="input-container">
                <input name="city" className='city-input' type='text' placeholder='Enter City Name' onChange={handleChange} />
                <input name="country" className='country-input' type='text' placeholder='Enter Country Name'onChange={handleChange}/>
              </div>            
              <button className="btn search-btn" onClick={handleClick}>Search</button>
        </div>
        <div className='weather-container'>
            <div className='city-container'>
              <h1>London, GB</h1>
              <h3>Thrusday, March 21, 2021</h3>
            </div>
            <div className='temp-container'>
              <h1>5'C</h1>
              <div>Image/icon</div>
              <h2>Detailed Weather</h2>
            </div>
            <div className='info-container'>
              <h2>Humidity: 87%</h2>
              <h2>Pressure: 1020hPa</h2>
            </div>
        </div>     
      </div>   
  )
}

export default Weather
