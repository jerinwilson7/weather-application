export type LocationType = {
    name:string
    region:string
    country:string
    lat:number
    lon:number
    tz_id:string
    localtime_epoch:number
    localtime:string
    time:string
}

type Condition = {
    text: string
    icon: string
}

export type CurrentWeatherType = {
    last_updated_epoch: number
    last_updated: string
    temp_c: number
    temp_f: number
    is_day: number
    condition: Condition
    wind_mph: number
    wind_kph: number
    wind_degree: number
    wind_dir: string
    pressure_mb: number
    pressure_in: number
    precip_mm: number
    precip_in: number
    humidity: number
    cloud: number
    feelslike_c: number
    feelslike_f: number
    windchill_c: number
    windchill_f: number
    heatindex_c: number
    heatindex_f: number
    dewpoint_c: number
    dewpoint_f: number
    vis_km: number
    vis_miles: number;
    uv: number
    gust_mph: number
    gust_kph: number
}




type Day = {
    maxtemp:number
    mintemp:number;
    condition:Condition
}


export type ForcastType = {
    date:string;
    day:Day
}