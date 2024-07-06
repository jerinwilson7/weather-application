// import { useEffect, useState } from "react";
import { Forecast, Header, Population, Temperature } from "../Components";
import { fetchData } from "../services/weatherService";

// import {
//   initalLocation,
//   initialCurrentWeather,
//   initialForecast,
//   initialPopulation,
// } from "../assets/data";
import { toast } from "react-toastify";
import { Button } from "../Components/Button";
import { useEffect, useState } from "react";
import { initialPopulation } from "../assets/data";
import { CurrentWeatherType } from "../types";

export const CityPage = () => {
  const [city, setCity] = useState<string>("alaska");
  const [loading, setLoading] = useState(true);
  const [location, setLocation] = useState();
  const [currentWeather, setCurrentWeather] = useState<CurrentWeatherType>();
  const [isDay, setIsDay] = useState(true);
  const [forcasts, setForcasts] = useState();
  const [isWeather, setisWeather] = useState(true);
  const [populations, setPopulations] = useState(initialPopulation);
  const [coords, setCoords] = useState({
    latitude: 0,
    longitude: 0,
  });

  useEffect(() => {
    const fetchInitial = async () => {
      console.log(city);
      try {
        const weatherResponse = await fetchData(city);
        console.log(weatherResponse);
        setCity("");

        if (weatherResponse.status) {
          setLocation(weatherResponse.data.location);
          setCurrentWeather(weatherResponse.data.currentWeather);
          setIsDay(weatherResponse.data.location.isDay);
          setForcasts(weatherResponse.data.forecast);
          setPopulations(weatherResponse.data.population);
        } else {
          toast.error(weatherResponse.message);
        }
      } catch (error) {
        console.error(error);
        toast.error("Failed to fetch weather data.");
      } finally {
        setLoading(false);
      }
    };

    fetchInitial();
  }, []);


  con

  
  const handleCityChange = (city: string) => {
    setCity(city);
  };

  const handleSubmit = async () => {
    setCity(city.trim());

    try {
      city.trim();

      if (city === "" || typeof city !== "string") {
        toast.error("Please enter a valid city name");
        return;
      }

      const weatherResponse = await fetchData(city);
      console.log("weatherResponse", weatherResponse);

      setCity("");

      if (weatherResponse.status) {
        toast.success(weatherResponse.message);

        setLocation(weatherResponse.data.location);
        setCurrentWeather(weatherResponse.data.currentWeather);
        setIsDay(weatherResponse.data.location.isDay);
        setForcasts(weatherResponse.data.forecast);
        setPopulations(weatherResponse.data.population);
      } else {
        toast.error(weatherResponse.message);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const onDataChange = () => {
    populations.status
      ? setisWeather((current) => !current)
      : toast.error(populations.message);
  };

  const getGeoLocation = () => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition((position) => {
        setCoords({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
        });
        console.log(coords);
        
      });
    } else {
      console.log("Geolocation is not available in your browser.");
    }
  };
  if (loading) {
    return <div>Loading ....</div>;
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
          onUserLocation={getGeoLocation}
        />

        {/* TEMPERATURE */}

        <Temperature current={currentWeather} />

        {/* FORCAST */}

        {isWeather ? (
          <Forecast forecasts={forcasts} isDay={isDay} />
        ) : (
          <Population populations={populations} />
        )}

        <Button isWeather={isWeather} onDataChange={onDataChange} />
      </div>
    </div>
  );
};
