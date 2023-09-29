import { IWeatherInfo } from "../../types";

const WeatherInfo = (props: IWeatherInfo) => {
    console.log(props);
    return (
        <div className={'weather-info-container'}>
            <h1>{props.location.name}</h1>
            <ul>
                <li>Temp: <i>{props.current.temp_c} deg</i></li>
                <li>Temp Feels like: <i>{props.current.feelslike_c} deg</i></li>
                <li>Time: {props.current.is_day === 1 ? 'Day' : 'Night'}</li>
            </ul>
        </div>
    );
};

export default WeatherInfo;