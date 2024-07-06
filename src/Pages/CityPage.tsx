import { Forecast, Header, Population, Temperature } from "../Components";
import { fetchData } from "../services/weatherService";
import { toast } from "react-toastify";
import { Button } from "../Components/Button";
import { useEffect, useState } from "react";
import { initialPopulation } from "../assets/data";
import { CurrentWeatherType, weatherDataType } from "../types";




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
        fetchWeather({ city: city });
      } catch (error) {
        console.error(error);
        toast.error("Failed to fetch weather data.");
      } 
     
    };

    fetchInitial();
  }, []);

  const fetchWeather = async (data: weatherDataType) => {
    try {
      const weatherResponse = await fetchData(data);
      console.log(weatherResponse);
      setCity("");

      if (weatherResponse.status) {
        setLocation(weatherResponse.data.location);
        setCurrentWeather(weatherResponse.data.currentWeather);
        setIsDay(weatherResponse.data.location.isDay);
        setForcasts(weatherResponse.data.forecast);
        setPopulations(weatherResponse.data.population);
        setLoading(false)
      } else {
        toast.error(weatherResponse.message);
      }
    } catch (error) {
      console.error(error);
      toast.error("Failed to fetch weather data.");
    }
  };

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

      fetchWeather({ city: city });
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
    console.log("GEO");
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        setCoords({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
        });
        console.log(coords);

        fetchWeather({
          latitude: coords.latitude,
          longitude: coords.longitude,
        });
      });
    } else {
      console.log("Geolocation is not available in your browser.");
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
            <Forecast forecasts={forcasts} isDay={isDay} />
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
