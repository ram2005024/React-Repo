import { useState } from "react";
export const FooterSection=({
  dataWeather,
  weatherIcons
})=>{
  console.log(dataWeather);
  const getIconsForHour=(i)=>{
    const weatherCode=dataWeather?.forecast?.forecastday?.[0]?.hour?.[i]?.condition?.code;
    const weatherIconName=Object.keys(weatherIcons).find((key)=>weatherIcons[key].includes(weatherCode));
    return weatherIconName;
  }

    return (
<div className="hoursFullForecast">
  {dataWeather?.forecast?.forecastday?.[0]?.hour?.map((data,i)=>(
 <ul className="listWeather">
 <li>{dataWeather?.forecast?.forecastday?.[0]?.hour?.[i]?.time.split(' ')[1]||"00:00"}</li>
 <li><img src={`${getIconsForHour(i)||'default'}.svg`} alt="image1" /></li>
 <li>{dataWeather?.forecast?.forecastday?.[0]?.hour?.[i]?.temp_c||0}°</li>
</ul> 
  ))}
   

</div>
    )
}
