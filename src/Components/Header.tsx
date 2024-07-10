import React, { useEffect, useRef } from 'react';
import locationImg from '../assets/images/location-light.svg'
import {  LocationType } from '../types';

type HeaderProps = {
    city:string,
    handleChangeCity:(city:string)=>void
    onSubmitCity:(city:string)=>void
    location :LocationType |null
    onUserLocation:()=>void
}

export const Header = ({city,handleChangeCity,onSubmitCity,location,onUserLocation}:HeaderProps) => {

    const inpulEl  = useRef<HTMLInputElement | null>(null)

    useEffect(()=>{
        if(inpulEl.current)
        inpulEl.current.focus();
    },[])

    const handleSubmit = (e:React.FormEvent<HTMLFormElement>)=>{
        e.preventDefault();
        onSubmitCity(city)
    }


  return (
    <div className='flex flex-1 justify-between items-center gap-14'>
    <div className='text-white font-mono mr-8'>
        <h1 className='text-4xl font-bold '>{location?.name}</h1>
        <h4 className='text-base'>{location?.time}</h4>
    </div>

    <div className='flex gap-3 items-center'>
        <form onSubmit={handleSubmit} className='flex flex-1'>
            <input type="text" value={city} className=' rounded-md font-mono p-2' onChange={(e)=>handleChangeCity(e.target.value)} ref={inpulEl}/>
            <input type="submit" className='bg-blue-700 py-2 px-4 rounded-lg text-white' value="search" />
        </form>

            <button className='py-2 bg-blue-700 rounded-lg px-1 ' onClick={onUserLocation}>
                <img src={locationImg} alt="" className='h-6 w-6' />
            </button>
    </div>
</div>
  );
};



