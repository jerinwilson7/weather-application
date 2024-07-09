
import tempImg from "../assets/images/feels-like.svg";
import humImg from "../assets/images/humidity.svg";
import windImg from "../assets/images/wind.svg";
import { CurrentWeatherType } from "../types";

type TemperaturePropsType={
  current:CurrentWeatherType | null

}

export const Temperature = ({current}:TemperaturePropsType) => {

  if (!current) {
    return <div>No current weather data available</div>;
  }

  return (
    <div className="flex justify-between pt-20 gap-20 items-center mb-12">
    <div className="flex text-white font-mono justify-start items-center w-7/12">
      <h1 className="text-9xl font-medium ">{Math.trunc(current.temp_c)}</h1>
      <ul className="pl-4">
        <li className="flex font-mono text-lg font-bold space-x-2">
          <h3>°C</h3>
          <span>|</span>
          <h3>°F</h3>
        </li>
        <li className="font-mono text-xl font-bold space-x-2">
          <h2>{current.condition.text}</h2>
        </li>
      </ul>
    </div>

    <div className=" text-white items-center  flex">
      <div className="w-1/3">
        <img src={current.condition.icon} className="w-48 h-48" alt="" />
      </div>
      <ul className="flex flex-col gap-2">
        <li className="flex whitespace-nowrap gap-2">
          <img src={tempImg} alt="" />
          <span>Feels like: </span>
          <span>{Math.trunc(current.feelslike_c)}°C</span>
        </li>
        <li className="flex whitespace-nowrap gap-2">
          <img src={humImg} alt="" />
          <span>Humidity: </span>
          <span>{current.humidity}%</span>
        </li>
        <li className="flex whitespace-nowrap gap-2">
          <img src={windImg} alt="" />
          <span>Wind: </span>
          <span>{current.wind_kph} km/h</span>
        </li>
      </ul>
    </div>
  </div>
  )
}
