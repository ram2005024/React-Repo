import { useState,useEffect } from 'react'
import axios from  "axios";
import './App.css'
import { SearchBar,MiddleSection,FooterSection,weatherIcons,ErrorPart } from './index'

function App() {
    const [data,setData]=useState({});
    const [intialValue,setInitialValue]=useState("Nepal");
    const [currentWeather,setCurrentWeather]=useState("");
    const [weatherIcon,setWeatherIconName]=useState("");
    const [noResults,setNoResults]=useState(false);
          const getAPIData=async (APIURL)=>{
            try{
              setNoResults(false);
              const result=await axios.get(APIURL);
              if(result.status < 200 || result.status >= 300) throw new Error('There was Error');
              setData(result.data);
              const weatherCode=result.data.current.condition.code;
              const icons=Object.keys(weatherIcons).find((weather)=>weatherIcons[weather].includes(weatherCode));
              setWeatherIconName(icons||'default');
            }
            catch(error){
                setNoResults(true);
            }
          }
 
  
      
  return (
<div className="mainContainer">
 <SearchBar 
 getDataFromAPI={getAPIData}
 defaultValue={intialValue}
 />
 {noResults?(
  <ErrorPart />
    )
    :
    (
  <>
<MiddleSection 
weatherIconDisplay={weatherIcon}
currentWeather={Math.floor(data?.current?.temp_c)||""} weatherDescription={data?.current?.condition?.text||currentWeather}  dataWeather={data}/>
<FooterSection dataWeather={data}
weatherIcons={weatherIcons}
/>
</>
)}
</div>
  );
}

export default App;
