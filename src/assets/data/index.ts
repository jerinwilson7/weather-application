import { CurrentWeatherType, LocationType } from "../../types"

export const quoteAPI = 'https://dummyjson.com/quotes/random'


export const initalLocation:LocationType = {
        name:"Dubai",
        region:"UAE",
        country:"Dubai",
        lat:12,
        lon:24,
        tz_id:"5546513",
        localtime_epoch:5648321,
        localtime:"31321",
        time:"23"
    
}

export const initialCurrentWeather:CurrentWeatherType={
    "last_updated_epoch": 1720068300,
            "last_updated": "2024-07-04 10:15",
            "temp_c": 28.2,
            "temp_f": 82.8,
            "is_day": 1,
            "condition": {
                "text": "Mist",
                "icon": "//cdn.weatherapi.com/weather/64x64/day/143.png",
                "code": 1030
            },
            "wind_mph": 2.2,
            "wind_kph": 3.6,
            "wind_degree": 10,
            "wind_dir": "N",
            "pressure_mb": 1010,
            "pressure_in": 29.83,
            "precip_mm": 0,
            "precip_in": 0,
            "humidity": 79,
            "cloud": 75,
            "feelslike_c": 31.5,
            "feelslike_f": 88.6,
            "windchill_c": 28.8,
            "windchill_f": 83.8,
            "heatindex_c": 32.6,
            "heatindex_f": 90.6,
            "dewpoint_c": 23.1,
            "dewpoint_f": 73.5,
            "vis_km": 4,
            "vis_miles": 2,
            "uv": 7,
            "gust_mph": 5,
            "gust_kph": 8.1
}