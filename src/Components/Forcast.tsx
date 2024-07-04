// import sunImg from "../assets/images/sun.svg";

import { ForeCastCard } from "./ForeCastCard"

// import { ForcastType } from "../types"
// import { ForeCastCard } from "./ForeCastCard"

// type ForcastPropsType = {
//     forecasts:ForcastType[]
// }

export const Forecast = () => {
  return (
    <div className="bg-forcast px-6 pt-8 pb-4 rounded-2xl">
            <div className="flex flex-wrap justify-between w-full text-white">

                <ForeCastCard
                />
                
                <ForeCastCard
                />
                
                <ForeCastCard
                />
                
                <ForeCastCard
                />
                
                {/* {forecasts.map((forecast, index) => (
                    <ForeCastCard
                        key={index} 
                        date={forecast.date}
                        img={forecast.day.condition.icon}
                        min={forecast.day.mintemp} 
                        max={forecast.day.maxtemp} 
                    />
                ))} */}
            </div>
        </div>

  )
}
