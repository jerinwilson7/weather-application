import { CurrentWeatherType, ForcastType, LocationType, PopulationType } from "../../types"

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


export const initialForecast:ForcastType[] = [
    {
        "currentDay":"monday",
        "date": "2024-07-04",
        "day": {
            "maxtemp": 29.3,
            "mintemp": 25.6,
            "condition": {
                "text": "Moderate rain",
                "icon": "//cdn.weatherapi.com/weather/64x64/day/302.png"
            }
        }
    },
    {
        "currentDay":"monday",
        "date": "2024-07-05",
        "day": {
            "maxtemp": 28.8,
            "mintemp": 25.6,
            "condition": {
                "text": "Moderate rain",
                "icon": "//cdn.weatherapi.com/weather/64x64/day/302.png"
            }
        }
    },
    {
        "currentDay":"monday",
        "date": "2024-07-06",
        "day": {
            "maxtemp": 29.2,
            "mintemp": 24.5,
            "condition": {
                "text": "Moderate rain",
                "icon": "//cdn.weatherapi.com/weather/64x64/day/302.png"
            }
        }
    },
    {
        "currentDay":"monday",
        "date": "2024-07-07",
        "day": {
            "maxtemp": 28.7,
            "mintemp": 24.7,
            "condition": {
                "text": "Patchy rain nearby",
                "icon": "//cdn.weatherapi.com/weather/64x64/day/176.png"
            }
        }
    },
    {
        "currentDay":"monday",
        "date": "2024-07-08",
        "day": {
            "maxtemp": 28.6,
            "mintemp": 25,
            "condition": {
                "text": "Patchy rain nearby",
                "icon": "//cdn.weatherapi.com/weather/64x64/day/176.png"
            }
        }
    }
]


export const initialPopulation:PopulationType[] =  [
    {
        "year": "2001",
        "count": "595575"
    },
    {
        "year": "2001",
        "count": "1355972"
    },
    {
        "year": "2010",
        "count": "343393"
    },
    {
        "year": "2005",
        "count": "333484"
    },
    {
        "year": "2004",
        "count": "332880"
    },
    {
        "year": "2003",
        "count": "332568"
    },
    {
        "year": "2000",
        "count": "330654"
    }
]