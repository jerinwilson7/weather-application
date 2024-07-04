import sunImg from "../assets/images/sun.svg";

export const Forcast = () => {
  return (
    <div className="bg-forcast px-6 pt-8 pb-4 rounded-2xl">
    <div className="flex flex-wrap justify-between w-full text-white">


        <div className="">
            <h3>Wednesday</h3>
            <img src={sunImg} alt="" />
            <p>40°C - 31°C</p>
            <p>clear sky</p>
        </div>
        <div>
            <h3>Wednesday</h3>
            <img src={sunImg} alt="" />
            <p>40°C - 31°C</p>
            <p>clear sky</p>
        </div>
        <div>
            <h3>Wednesday</h3>
            <img src={sunImg} alt="" />
            <p>40°C - 31°C</p>
            <p>clear sky</p>
        </div>
        <div>
            <h3>Wednesday</h3>
            <img src={sunImg} alt="" />
            <p>40°C - 31°C</p>
            <p>clear sky</p>
        </div>
        <div>
            <h3>Wednesday</h3>
            <img src={sunImg} alt="" />
            <p>40°C - 31°C</p>
            <p>clear sky</p>
        </div>

    </div>
</div>

  )
}
