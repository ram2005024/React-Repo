import { useRef,useEffect} from "react";
export const SearchBar=({
  defaultValue,
  getDataFromAPI
})=>{
  let myRef=useRef(null);
  const myAPIKey = import.meta.env.VITE_MY_API_KEY;
const handleSearch=(e)=>{
    e.preventDefault();
    const inputSearch=e.target.querySelector('.searchInput');
  getDataFromAPI(`http://api.weatherapi.com/v1/forecast.json?key=${myAPIKey}&q=${inputSearch.value}`);
    console.log(inputSearch.value);
    inputSearch.value=""
}
useEffect(()=>{
  getDataFromAPI(`http://api.weatherapi.com/v1/forecast.json?key=${myAPIKey}&q=${defaultValue}`)
},[]);
const getMyLocation=()=>{
  navigator.geolocation.getCurrentPosition((position)=>{
const latitude=position.coords.latitude;
const longitude=position.coords.longitude;
getDataFromAPI(`http://api.weatherapi.com/v1/forecast.json?key=${myAPIKey}&q=${latitude},${longitude}`)
  },(error)=>{
    alert("Please access your location first")
  })
}
useEffect(()=>{
myRef.current.focus();
},[]);

    return(
        <div className="searchSection">
        <form action="#
      " className='mySearchForm'
      onSubmit={handleSearch
      }
      >
            <span className="material-symbols-rounded">
            search
            </span>
      <input type="search" className='searchInput' placeholder='Enter a city name'  required defaultValue={"Nepal"}
     ref={myRef}

       />
      </form>
      <div className="searchLocation">
        <button onClick={getMyLocation}>
        <span className="material-symbols-rounded">
      my_location
      </span>
        </button>
      </div>
        </div>
    )
}
