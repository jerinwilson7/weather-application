// import sunImg from "../assets/images/sun.svg";

import { ForeCastCard } from "./ForeCastCard"

import { ForcastType } from "../types"

type ForcastPropsType = {
    forecasts:ForcastType[] | null;
    isDay:boolean
}

export const Forecast = ({forecasts,isDay}:ForcastPropsType) => {

  

  if (!forecasts) {
    return <div>No current weather data available</div>;
  }

  return (
    <div className="bg-forcast px-6 pt-8 pb-4 rounded-2xl">
            <div className="flex flex-nowrap overflow-scroll  gap-4 justify-between items-center w-full text-white">

                {
                    forecasts.map((forecast, index) => (
 

                        <ForeCastCard key={index}
                        currentDay={forecast.currentDay}
                          img={forecast.day.condition.icon} 
                          max={forecast.day.maxtemp}
                          min={forecast.day.mintemp}
                          condition={forecast.day.condition}
                          isDay={isDay}

                          />
                    ))

                }
                
                
              
            </div>
        </div>

  )
}
