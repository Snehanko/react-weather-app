import React, { useEffect, useState } from 'react'
import axios from 'axios';
import './weather.scss';
import Modal from '../modal/Modal';

function Weather() {

  const [weatherData,setWeatherData]=useState({});
  const [modal,setModal]=useState(false);
  const [cityData,setCityData]=useState({ 
    city:'',
    country:''
  })

  
  const APIkey= '895b84687fcddc3e0be9289362976c63';
  const URL=`https://api.openweathermap.org/data/2.5/weather?q=${cityData.city},${cityData.country}&units=metric&appid=${APIkey}`;
  
  const getWeatherData = async()=>{
      await axios.get(URL).then((response)=>{
      const data = response.data;
          
      return data;
    }).catch(err=>{
        alert(err);
    })

  }
  
  const handleChange = async ()=>{
    setModal(true);
    const data=await getWeatherData();
    setWeatherData(data);
    console.log(weatherData);
  }

  useEffect(()=>{
    handleChange();
    setModal(!modal);
  },[])
  //const iconURL=`https://openweathermap.org/img/w/${weatherData.weather[0].icon}.png`;

  return (
    <>
    {
      modal===true&&<Modal setCityData={setCityData}/>
    }
      <div className='container'>
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
      
      <button onClick={handleChange}>Change Location</button>
    </div>
    </>
    
  )
}

export default Weather
