import { PopulationType } from "../types"
import { PopulationCard } from "./PopulationCard"


type PopulationPropsType = {
    populations:PopulationType
}

export const Population = ({populations}:PopulationPropsType) => {
    return (
      <div className="bg-forcast px-6 pt-8 pb-4 rounded-2xl">
              <div className="flex overflow-scroll gap-16 items-center w-full text-white">
  
                 {
                    populations.data.map((population,index)=>(
                        
                        <PopulationCard key={index} count={population.count} year={population.year}/>
                    ))
                 }
                
              </div>
          </div>
    )
  }
  