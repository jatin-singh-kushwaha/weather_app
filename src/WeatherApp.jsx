import SearchBox from "./SearchBox"
import InfoBox from "./InfoBox"
import { useState } from "react"

export default function WeatherApp(){
    const [weatherInfo,setweatherInfo]=useState({
        City:"Delhi",
        feeslike: 31.32,
        humidity: 94,
        temp: 27.05,
        tempMax: 27.05,
        tempMin: 27.05,
        weather: "Mist",
    })

    let updateInfo=(newInfo)=>{
        setweatherInfo(newInfo);
    }
    return(
        <div>
            <SearchBox updateInfo={updateInfo}/>
            <br /><br />
            <InfoBox info={weatherInfo}/>
        </div>
    )
}