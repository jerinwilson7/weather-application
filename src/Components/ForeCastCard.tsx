import { changeIcon } from "../services/weatherService";
import { Condition } from "../types";

type ForcastCardProps = {
    currentDay:string
    img:string;
    min:number,
    max:number
    condition:Condition
    isDay:boolean
}

export const ForeCastCard = ({currentDay,max,min,condition,isDay}:ForcastCardProps) => {
  
   changeIcon(condition,isDay)
  
  return (
    <div className="flex flex-col items-center justify-center m-1 space-y-1">
            <h3 className="font-mono text-sm font-semibold">{currentDay}</h3>
            <img className="w-20 h-20 " src={condition.icon} alt=""  />
            <p className="font-sans text-sm ">{min}°C - {max}°C</p>
            <p className="font-mono text-xs font-semibold ">{condition.text}</p>
        </div>
  )
}
