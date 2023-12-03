import * as Location from "expo-location";
import { WEATHER_API_KEY } from "@env";
import { useState, useEffect } from "react";

export const useGetWeather = () => {

    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [weather, setWeather] = useState(null);
    const [lat, setLat] = useState(0);
    const [lon, setLon] = useState(0);

    const fetchWeatherData = async () => {
        try {
          const res = await fetch(
            `http://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric`
          );
          const data = await res.json();
          setWeather(data)
        } catch (e) {
          setError("Could not fetch weather");
        } finally {
          setLoading(false);
        }
      };
      useEffect(() => {
        (async () => {
          let { status } = await Location.requestForegroundPermissionsAsync();
          if (status !== "granted") {
            setError("permission to acess location was denied");
            return;
          }
          try{
          let location = await Location.getCurrentPositionAsync({});
          setLat(location.coords.latitude);
          setLon(location.coords.longitude);
          await fetchWeatherData();
          } catch (error) {
            setError("Error fetching location");
          }
        })();
      }, [lat, lon]);

      return [loading, error, weather]
}