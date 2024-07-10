import { Forecast, Header, Population, Temperature } from "../Components";
import { fetchData } from "../services/weatherService";
import { toast } from "react-toastify";
import { Button } from "../Components/Button";
import { useEffect, useReducer } from "react";
import {  initialState } from "../assets/data";
import {  weatherDataType } from "../types";
import { weatherReaducer } from "../Reducer/WeatherReducer";




export const CityPage = () => {



  const [{city,coords,currentWeather,forecasts,isDay,isWeather,loading,location,populations},dispatch] = useReducer(weatherReaducer,initialState)


  useEffect(() => {
    const fetchInitial = async () => {
      try {
        fetchWeather({ city: city });
      } catch (error) {
        console.error(error);
        toast.error("Failed to fetch weather data.");
      } 
     
    };

    fetchInitial();
  },[]);

  const fetchWeather = async (data: weatherDataType) => {
    try {
      const weatherResponse = await fetchData(data);
      dispatch({type:"SET_CITY",payload:''})

      if (weatherResponse.status) {
        dispatch({type:'SET_LOCATION' , payload: weatherResponse.data.location});
        dispatch({type:'SET_CURRENT_WEATHER' ,payload:weatherResponse.data.currentWeather});
        dispatch({type:'SET_IS_DAY',payload:weatherResponse.data.location.isDay});
        dispatch({type:"SET_FORECASTS",payload:weatherResponse.data.forecast});
        dispatch({type:'SET_POPULATIONS' ,payload:weatherResponse.data.population});
        dispatch({type:"SET_LOADING" ,payload:false})


      } else {
        toast.error(weatherResponse.message);
      }
    } catch (error) {
      toast.error("Failed to fetch weather data.");
    }
  };

  const handleCityChange = (city: string) => {
    dispatch({type:"SET_CITY",payload:city})
  };

  const handleSubmit = async () => {
    dispatch({type:"SET_CITY",payload:city.trim()})

    try {
      city.trim();

      if (city === "" || typeof city !== "string") {
        toast.error("Please enter a valid city name");
        return;
      }

      fetchWeather({ city: city });
    } catch (error) {
      toast.error("error fetching data")
    }
  };

  const onDataChange = () => {
    populations.status
      ? dispatch({type:"IS_WEATHER"})
      : toast.error(populations.message);
  };

  const getGeoLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        dispatch({
          type:"SET_COORDS",
          payload:{

            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
          }
        });

        fetchWeather({
          latitude: coords.latitude,
          longitude: coords.longitude,
        });
      });
    } else {
      toast.error("Geolocation is not available in your browser.");
    }
  };

  return (
    <div className="flex items-center justify-center h-screen w-screen bg-bgMain bg-cover bg-no-repeat">
      {loading ? (
        <div className="text-white text-lg">Loading...</div>
      ) : (
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
            onUserLocation={getGeoLocation}
          />

          {/* TEMPERATURE */}
          <Temperature current={currentWeather} />

          {/* FORECAST OR POPULATION */}
          {isWeather ? (
            <Forecast forecasts={forecasts} isDay={isDay} />
          ) : (
            <Population populations={populations} />
          )}

          {/* TOGGLE BUTTON */}
          <Button isWeather={isWeather} onDataChange={onDataChange} />
        </div>
      )}
    </div>
  );
};


