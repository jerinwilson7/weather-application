import {PopulationType, StateType } from "../../types"

export const quoteAPI = 'https://dummyjson.com/quotes/random'




export const initialPopulation:PopulationType = {
    status:true,
    message:"data fetched",
    data:[
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
} 

export const initialState:StateType = {
    city: "alaska",
    loading: true,
    location: null,
    currentWeather: null,
    isDay: true,
    forecasts: null,
    isWeather: true,
    populations: initialPopulation,
    coords: { latitude: 0, longitude: 0 },
  };

