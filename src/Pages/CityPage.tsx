import { useState } from "react";
import { Forecast, Header, Population, Temperature } from "../Components";
import { fetchData } from "../services/weatherService";
import {TiWeatherCloudy} from 'react-icons/ti'

import {
  initalLocation,
  initialCurrentWeather,
  initialForecast,
  initialPopulation,
} from "../assets/data";
import {RiGroupLine } from "react-icons/ri";

export const CityPage = () => {
  const [city, setCity] = useState<string>("");
  // const [loading, setLoading] = useState(false)
  const [location, setLocation] = useState(initalLocation);
  const [currentWeather, setCurrentWeather] = useState(initialCurrentWeather);
  const [isDay, setIsDay] = useState(true);
  const [forcasts, setForcasts] = useState(initialForecast);
  const [isWeather, setisWeather] = useState(true)
  const [populations, setPopulations] = useState(initialPopulation)


  const handleCityChange = (city: string) => {
    setCity(city);
  };

  const handleSubmit = async () => {
    // setLoading(true)

    try {
      const weatherResponse = await fetchData(city);
      console.log("weatherResponse", weatherResponse);

      setLocation(weatherResponse.location);
      setCurrentWeather(weatherResponse.currentWeather);
      setIsDay(weatherResponse.location.isDay);
      setForcasts(weatherResponse.forecast);
      setPopulations(weatherResponse.population)


    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="flex items-center justify-center h-screen w-screen bg-bgMain bg-cover bg-no-repeat">
      <div
        className={`bg-cover p-14 rounded-lg bg-blue-500 max-w-[900px] ${
          isDay ? "bg-day" : "bg-night"
        }`}
      >
        {/* HEADER */}

        <Header
          city={city}
          location={location}
          handleChangeCity={handleCityChange}
          onSubmitCity={handleSubmit}
        />

        {/* TEMPERATURE */}

        <Temperature current={currentWeather} />

        {/* FORCAST */}

        { isWeather ?
          <Forecast forecasts={forcasts} />:

        <Population populations={populations}/>
          }


        <button 
        onClick={()=>setisWeather(weather=>!weather)}
        className="py-2 bg-blue-700 rounded-lg px-2 border-white border absolute bottom-5 left-1/2">
          {isWeather ?
          < RiGroupLine color="white" size={20}/> :
          <TiWeatherCloudy color="white" size={20}/>
          }
        </button>
      </div>
    </div>
  );
};
