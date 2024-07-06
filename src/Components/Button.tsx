import { RiGroupLine } from "react-icons/ri";
import { TiWeatherCloudy } from "react-icons/ti";

type ButtonProps = {
    isWeather:boolean
    onDataChange:()=>void
}

export const Button = ({isWeather,onDataChange}:ButtonProps) => {



  return (
    <button 
    onClick={onDataChange}
    className="py-2 bg-blue-700 rounded-lg px-2 border-white border absolute bottom-5 left-1/2">
      {isWeather ?
      < RiGroupLine color="white" size={20}/> :
      <TiWeatherCloudy color="white" size={20}/>
      }
    </button>
  )
}
