import axios from "axios"
import { SERVER } from "../server"

export const fetchData = async(city:string)=>{
  
    const response = await axios.get(`${SERVER}`,{
      params:{
        city:city
      }
    })
    
    // console.log(response.data.data)
    const weatherData = response.data.data
    return weatherData
}