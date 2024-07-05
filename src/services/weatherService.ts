import axios from "axios"
import { SERVER } from "../server"

export const fetchData = async(city:string)=>{
  
    const response = await axios.get(`${SERVER}`,{
      params:{
        city:city
      }
    })
    
    console.log(response.data)
    if(response.data.status === true){
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