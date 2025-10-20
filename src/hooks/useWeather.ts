import axios from "axios"
import type { SearchType } from "../types"

export default function useWeather() {
    const fetchWeather = async (search: SearchType) => {
        console.log('Query DB ...')
        try {
            const geoUrl = `https://api.openweathermap.org/data/2.5/weather?q=${search.city},${search.city}&appid=${import.meta.env.VITE_API_WEATHER_KEY}`
            const {data} = await axios(geoUrl)
            console.log(data)
        } catch (error) {
            console.error(`Error fetchWeather: ${error}`)
        }
    }
    return {
        fetchWeather    
    }
}