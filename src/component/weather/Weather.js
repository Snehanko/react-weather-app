import React, { useEffect, useState } from 'react'
import axios from 'axios';
import './weather.scss';

const APIkey= '895b84687fcddc3e0be9289362976c63';

function Weather() {

  const [weatherData,setWeatherData]=useState({});

  const [cityData,setCityData]=useState({ 
    city:'Durgapur',
    country:'India'
  })

  const [date,setDate] =useState('')
  
  const URL=`https://api.openweathermap.org/data/2.5/weather?q=${cityData.city},${cityData.country}&units=metric&appid=${APIkey}`;

  const handleChange=(e)=>{
      setCityData({...cityData,[e.target.name]:e.target.value});
  }

  const handleClick=()=>{
        axios.get(URL)
        .then((response)=>{
          setWeatherData(response.data);   
        })
        .catch((err)=>
        console.log(err))
    }

  const getDate=()=>{
      var today = new Date();      
      setDate(`${today.getDate()}-${(today.getMonth() + 1)}-${today.getFullYear()}`);    
  }

  useEffect(()=>{  
    handleClick();
    getDate();
  },[])

  
  
  //const iconURL=`https://openweathermap.org/img/w/${weatherData.weather[0].icon}.png`;

  return ( 
            
            <div className='container'>
              <div className='search-container'>
                    <div className="input-container">
                      <input name="city" className='city-input' type='text' placeholder='Enter City Name' value={cityData.city} onChange={handleChange} />
                      <input name="country" className='country-input' type='text' placeholder='Enter Country Name'value={cityData.country} onChange={handleChange}/>
                    </div>            
                    <button className="btn search-btn" onClick={handleClick}>Search</button>
              </div>
              <div className='weather-container'>
                  <div className='city-container'>
                    {weatherData.main?<h1>{weatherData.name},{weatherData.sys.country}</h1>:null}
                    <h2>{date}</h2>
                  </div>
                  <div className='temp-container'>
                     {weatherData.main ? <h2>{Math.round((weatherData.main.temp)*10)/10} ℃</h2>:null}
                      {weatherData.weather?
                      <img 
                          src={`https://openweathermap.org/img/w/${weatherData.weather[0].icon}.png`} 
                          alt={weatherData.weather[0].description}
                          />:
                      null}
                    <h2>Detailed Weather</h2>
                  </div>
                  <div className='info-container'>
                    {weatherData.main ? <h2>Humidity: {weatherData.main.humidity} %</h2>:null}
                    {weatherData.main ? <h2>Pressure: {weatherData.main.pressure}</h2>:null}
                  </div>
              </div>  
            </div>   
  )
}

export default Weather
