import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import "./SearchBox.css"
import { useState } from 'react';


export default function SearchBox({updateInfo}){
const [city,setcity]=useState("");
const [error,SetError]=useState(false);

const API_URL="https://api.openweathermap.org/data/2.5/weather";
const API_KEY="4c2e203f75d0587f31fad062811ad883";

let getWeatherInfo= async()=>{
    try{
let response=  await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`)
let jsonResponse= await response.json();
console.log(jsonResponse);
let result={
    City:city,
    temp: jsonResponse.main.temp,
    tempMin: jsonResponse.main.temp_min,
    tempMax: jsonResponse.main.temp_max,
    humidity: jsonResponse.main.humidity,
    feeslike: jsonResponse.main.feels_like,
    weather: jsonResponse.weather[0].main,
}
console.log(result);
return result;
    }catch(err){
        throw err;
    }
};

    let handleChange=(event)=>{
         setcity(event.target.value);
    }

    let handleSearch= async (event)=>{
        try{
        event.preventDefault();
        console.log(city);
        setcity("");
        let newInfo= await getWeatherInfo();
        updateInfo(newInfo);
        }catch(err){
            SetError(true);
        }
   }


    return (
        <div className='SearchBox'>
      <h1> Weather App</h1>
      <form onSubmit={handleSearch}>
      <TextField id="City" label="City Name" variant="outlined" required value={city} onChange={handleChange}/>
      <br /><br />
      <Button variant="contained" type='submit'>Search</Button>
      </form>
      {error && <p style={{color: "red"}} >No such city in API!!</p>}
    </div>
    )
}