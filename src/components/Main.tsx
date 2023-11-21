import * as React from 'react';
import CitySelector from "./CitySelector"
import WeatherList from './WeatherList';


function Main() {
    const [isShown, setIsShown] = React.useState(false);
    const [cit, setCit] = React.useState()
    const [f, setF] = React.useState(false)

    return (
        <main>
            <CitySelector onClick={(city, flag) => {
                setIsShown(true);
                setCit(city);
                setF(flag)
            }} />
            <hr></hr>
            {isShown && (<WeatherList city={cit} flag={f} key={cit + String(f)} />)}
        </main>
    )
}

export default Main;
