export const MiddleSection=({
  currentWeather,
  weatherDescription,
  weatherIconDisplay
})=>{

    return (
      <div className="middleSection">
      <img src={`${weatherIconDisplay||`cloudy`}.svg`} alt="weatherImage" className="middleImage" />
      <div className="middleContent">
        <h1 className="weatherDetail ">{currentWeather||0}
        <span className='inline-block text-[1rem] relative bottom-[13px]'>°C</span>
        </h1>
      </div>
      <p className="weatherName ">{weatherDescription}</p>
      </div>
    )
}
