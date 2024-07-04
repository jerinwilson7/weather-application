
type ForcastCardProps = {
    currentDay:string
    img:string;
    min:number,
    max:number
    text:string
}

export const ForeCastCard = ({currentDay,img,max,min,text}:ForcastCardProps) => {
  return (
    <div className="flex flex-col items-center justify-center m-1 space-y-1">
            <h3 className="font-mono text-sm font-semibold">{currentDay}</h3>
            <img className="w-20 h-20 " src={img} alt=""  />
            <p className="font-sans text-sm ">{max}°C - {min}°C</p>
            <p className="font-mono text-xs font-semibold ">{text}</p>
        </div>
  )
}
