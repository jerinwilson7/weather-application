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
import { toast } from "react-toastify";

export const CityPage = () => {
  const [city, setCity] = useState<string>("");
  // const [loading, setLoading] = useState(false)
  const [location, setLocation] = useState(initalLocation);
  const [currentWeather, setCurrentWeather] = useState(initialCurrentWeather);
  const [isDay, setIsDay] = useState(true);
  const [forcasts, setForcasts] = useState(initialForecast);
  const [isWeather, setisWeather] = useState(true)
  const [populations, setPopulations] = useState(initialPopulation)

  // console.log(setisWeather)

  const handleCityChange = (city: string) => {
    setCity(city);
  };

  const handleSubmit = async () => {
    // setLoading(true)zcxzxczxczccxv

    try {
      const weatherResponse = await fetchData(city);
      console.log("weatherResponse", weatherResponse);
      
      if(weatherResponse.status){

        toast.success(weatherResponse.message)

        setLocation(weatherResponse.data.location);
        setCurrentWeather(weatherResponse.data.currentWeather);
        setIsDay(weatherResponse.data.location.isDay);
        setForcasts(weatherResponse.data.forecast);
        setPopulations(weatherResponse.data.population)
        console.log(populations)
      }
      else{
        toast.error(weatherResponse.message)
      }



    } catch (error) {
      console.log(error);
    }
  };

   const onDataChange = ()=>{

     populations.status ? setisWeather((current)=>!current) : toast.error(populations.message)

   }

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
        onClick={onDataChange}
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
