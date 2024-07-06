export type LocationType = {
    name:string
    region:string
    country:string
 
    localtime:string
    time:string
    isDay:boolean
}

export type Condition = {
    text: string
    icon: string
}

export type CurrentWeatherType = {
  
    temp_c: number
    temp_f: number
    feelslike_c:number
    condition: Condition
    wind_kph: number
    pressure_mb: number
    pressure_in: number
    precip_mm: number
    precip_in: number
    humidity: number
    
}




type Day = {
    maxtemp:number
    mintemp:number;
    condition:Condition
}


export type ForcastType = {
    currentDay:string
    date:string;
    day:Day
}

type PopulationData = {
    year:string;
    count:string
}

export type PopulationType = {
    status:boolean
    message:string
    data:PopulationData[]
    
}

export type weatherDataType={
    city?:string
    latitude?: string,
    longitude?: string,
}