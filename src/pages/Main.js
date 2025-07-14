import { useState } from 'react';
import Header from '../components/Header';
import { UseWeather } from '../hooks/UseWeather';

export default function Main(){
    const [city, setCity] = useState("서울");
    const { weather, loading } = UseWeather(city);

    return(
        <div>
            <Header city={city}/>
        </div>
    );
}