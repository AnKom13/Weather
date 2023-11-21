import * as React from "react";
import axios from "axios";
import WeatherCard from './WeatherCard'
import { API_KEY, API_BASE_URL } from '../api/config'


function WeatherList(props) {
    const [w, setW] = React.useState([]);
    

    const mode = props.flag ? 'forecast' : 'weather';
    React.useEffect(() => {
        const fetchData = async () => {
            const res = await axios(
                `${API_BASE_URL}/data/2.5/${mode}?q=${props.city}&appid=${API_KEY}&units=metric&lang=ru`
            );
            props.flag ? setW(res.data.list) : setW([res.data]);
        }
        fetchData()
    }, []);

    return (
        <>
            {w.map(({ dt, main, weather }, index) => (index % 8 === 0 ?
                <span key={dt} >
                    <WeatherCard temp_min={main.temp_min} dt={dt * 1000} main={weather[0].main} icon={weather[0].icon} desc={weather[0].description} />
                </span> : ''
            ))}
        </>
    )
}

export default WeatherList;
