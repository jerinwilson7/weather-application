
import  { useState } from "react";
import {  Forecast, Header, Temperature } from "../Components";
import { fetchData } from "../services/weatherService";
import { initalLocation, initialCurrentWeather, initialForecast } from "../assets/data";

export const CityPage = () => {
    const [city, setCity] = useState<string>('')
    // const [loading, setLoading] = useState(false)
    const [location,setLocation] = useState(initalLocation)
    const [currentWeather,setCurrentWeather] = useState(initialCurrentWeather)
    const [isDay, setIsDay] = useState(true)
    const [forcasts, setForcasts] = useState(initialForecast)

  //  console.log(loading)

    const handleCityChange=(city:string)=>{
        setCity(city)
    }

  

      const handleSubmit = async()=>{
        // setLoading(true)

        try {
          
          const weatherResponse = await fetchData(city)
          console.log("weatherResponse",weatherResponse)
     
          setLocation(weatherResponse.location)
          setCurrentWeather(weatherResponse.currentWeather)
          setIsDay(weatherResponse.location.isDay)
          setForcasts(weatherResponse.forcast)

        console.log(forcasts)

        } catch (error) {
          console.log(error)
        }
      }

  return (
    <div className='flex items-center justify-center h-screen w-screen bg-bgMain bg-cover bg-no-repeat' >
      <div className={`bg-cover p-14 rounded-lg bg-blue-500 max-w-[900px] ${isDay ? 'bg-day' : 'bg-night'}`}>
        {/* HEADER */}

        <Header city={city} location={location} handleChangeCity={handleCityChange} onSubmitCity={handleSubmit}/>

        {/* TEMPERATURE */}

        <Temperature current={currentWeather} />

        {/* FORCAST */}

        <Forecast
        //  forecasts={forcasts}
         />
      </div>
    </div>
  );
};



