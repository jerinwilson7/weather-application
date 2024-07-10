import axios from "axios"
import { SERVER } from "../server"
import sumImg from '../assets/images/sun.svg'
import mistImg from '../assets/images/mist.svg'
import pClouds from '../assets/images/pclouds.svg'
import clouds from '../assets/images/clouds.svg'
import clearNight from '../assets/images/clearNight.svg'
import thunderRain from '../assets/images/thunderRain.svg'
import moderateRain from '../assets/images/moderate-rain.svg'
import { Condition, weatherDataType } from "../types"

export const changeIcon = (condition:Condition, location:boolean)=>{


  if(condition.text === 'Sunny') condition.icon = sumImg
      if(condition.text === 'Mist') condition.icon = mistImg
      if(condition.text === 'Partly cloudy') condition.icon = pClouds
      if(condition.text === 'Partly Cloudy') condition.icon = pClouds
      if(condition.text === 'Patchy rain nearby') condition.icon = clouds
      if(condition.text === 'Moderate or heavy rain with thunder') condition.icon = thunderRain
      if(condition.text === 'Moderate rain') condition.icon = moderateRain
      if(condition.text === 'Light rain') condition.icon = moderateRain
      if(!location && condition.text === 'Clear') condition.icon = clearNight
      if(location && condition.text === 'Clear') condition.icon = sumImg
}


export const fetchData = async(weatherData:weatherDataType)=>{
  
    const response = await axios.get(`${SERVER}`,{
      params:{
        data:weatherData
      }
    })
    
    if(response.data.status === true){

      const condition  =response.data.data.currentWeather.condition
      const location = response.data.data.location.isDay

    

      changeIcon(condition,location)

      

      return{
        status:true,
        message:response.data.message,
        data:response.data.data
      }
    }
    else{
      return{
        status:false,
        message:response.data.message,
        data:"error fetching data"
      }
    }
   
}