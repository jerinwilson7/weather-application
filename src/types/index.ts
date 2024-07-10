export type LocationType = {
  name: string;
  region: string;
  country: string;

  localtime: string;
  time: string;
  isDay: boolean;
};

export type Condition = {
  text: string;
  icon: string;
};

export type CurrentWeatherType = {
  temp_c: number;
  temp_f: number;
  feelslike_c: number;
  condition: Condition;
  wind_kph: number;
  pressure_mb: number;
  pressure_in: number;
  precip_mm: number;
  precip_in: number;
  humidity: number;
};

type Day = {
  maxtemp: number;
  mintemp: number;
  condition: Condition;
};

export type ForcastType = {
  currentDay: string;
  date: string;
  day: Day;
};

type PopulationData = {
  year: string;
  count: string;
};

export type PopulationType = {
  status: boolean;
  message: string;
  data: PopulationData[];
};

export type weatherDataType = {
  city?: string;
  latitude?: number;
  longitude?: number;
};

export type StateType = {
  city: string;
  loading: boolean;
  location: null | LocationType;
  currentWeather: null | CurrentWeatherType;
  isDay: boolean;
  forecasts: ForcastType[] | null;
  isWeather: boolean;
  populations: PopulationType;
  coords: {
    latitude: number;
    longitude: number;
  };
};

type SetCity = {
  type: "SET_CITY";
  payload:string
};
type SetLoading = {
  type: "SET_LOADING";
  payload:boolean
};
type SetLocation = {
  type: "SET_LOCATION";
  payload:LocationType
};
type SetCurrentWeather = {
  type: "SET_CURRENT_WEATHER";
  payload:CurrentWeatherType
};
type SetIsDay = {
  type: "SET_IS_DAY";
  payload:boolean
};
type SetForecasts = {
  type: "SET_FORECASTS";
  payload:ForcastType[]
};
type IsWeather = {
  type: "IS_WEATHER";
};
type SetPopulations = {
  type: "SET_POPULATIONS";
  payload:PopulationType
};
type SetCoords = {
  type: "SET_COORDS";
  payload:{
    latitude: number;
    longitude: number;
  };
};

export type ActionTypes =
  | SetCity
  | SetCoords
  | SetLoading
  | SetLocation
  | SetCurrentWeather
  | SetIsDay
  | SetPopulations
  | SetForecasts
  | IsWeather;
