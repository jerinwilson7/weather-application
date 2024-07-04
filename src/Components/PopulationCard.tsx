import youth from '../assets/images/youth.png'


type PopulationCardType = {
    count:string,
    year:string
}

export const PopulationCard = ({count,year}:PopulationCardType) => {
  return (
    <div className="flex flex-col items-center justify-center m-1 space-y-1">
            <h3 className="font-mono text-sm font-semibold">{year}</h3>
            <img className="w-20 h-20 " src={youth} alt=""  />
            <p className="font-mono text-sm font-semibold">{count}</p>
        </div>
  )
}
