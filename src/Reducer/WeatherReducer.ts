import { ActionTypes, StateType } from "../types";

export const weatherReaducer = (state:StateType,action:ActionTypes):StateType=>{
    switch(action.type){
        case "SET_CITY":
            return{...state,city:action.payload}

        case "IS_WEATHER":
            return{...state,isWeather:!state.isWeather}    
        
        case "SET_COORDS":
            return{...state,coords:action.payload}    
         
       case "SET_CURRENT_WEATHER":
            return{...state,currentWeather:action.payload}
        
        case 'SET_FORECASTS' :
           return {...state,forecasts:action.payload}
        case 'SET_IS_DAY':
            return {...state,isDay:action.payload}
        case 'SET_LOADING':
            return{...state,loading:action.payload}
        
        case 'SET_LOCATION':
            return{...state,location:action.payload}
        case 'SET_POPULATIONS':
            return{...state,populations:action.payload}        


      default:
        return state       
    }

}