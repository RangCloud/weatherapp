import { useEffect, useState } from "react";
import { getCurrentWeather } from "../api/weatherApi";

export function UseWeather(city) {
    const [weather, setWeather] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        getCurrentWeather(city).then((data) => {
        setWeather(data);
        setLoading(false);
        });
    }, [city]);

    return { weather, loading };
}