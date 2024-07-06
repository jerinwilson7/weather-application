import { useNavigate } from "react-router-dom"

import { Card } from "../Components/Card";



export const HomePage = () => {
  const navigate = useNavigate();

  

 

  return (
    <div className="flex flex-col justify-center items-center bg-bgMain bg-cover bg-no-repeat h-screen w-screen space-y-4">
        <Card/>
        <button 
        onClick={()=>navigate('/city-details')}
        className="bg-indigo-500 p-5 text-white font-bold rounded-lg hover:bg-indigo-700">
            Check weather
            </button>
    </div>
  );
};
