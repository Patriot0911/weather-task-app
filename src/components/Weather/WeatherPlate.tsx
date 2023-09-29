import axios from 'axios';
import { APIKEY, BASEURL} from '../../config.json';
import { useEffect, useReducer } from 'react';
import WeatherInfo from './WeatherInfo';
import isValidWeatherResponse from '../../scripts/weatherValidator';
import {
    IPlateInfo,
    IWeaherPlateProps
} from '../../types';
import weatherReducer from '../../scripts/weatherReducer';
import './Weather.css';

const initialPlateInfo: IPlateInfo = {
    error:  undefined,
    loading: false,
    weatherInfo: undefined
};

const WeatherPlate = ({ search }: IWeaherPlateProps) => {
    const [state, dispatch] = useReducer(weatherReducer, initialPlateInfo);

    useEffect(() => {
        if(search.length < 3)
            return;
        dispatch({
            type: 'setLoading',
            params: true
        });
        axios.get(`${BASEURL}/current.json?key=${APIKEY}&q=${search}&aqi=no`)
        .then((response) => {
            const isValid = isValidWeatherResponse(response.data);
            if(!isValid[0]) {
                console.error(isValid[1].message);
                dispatch({
                    type: 'setError',
                    params: '[Structure Error] Please try again later'
                });
                return;
            }
            dispatch({
                type: 'setWeatherInfo',
                params: isValid[1]
            });
        })
        .catch((err) => {
            dispatch({
                type: 'setError',
                params: err.response.message
            });
        });
    }, [search]);
    return (
        <>
            {
                (state.weatherInfo && state.error === undefined) ?
                <WeatherInfo
                    {...state.weatherInfo}
                /> :
                (
                    state.loading ?
                    <h1>Loading</h1> :
                    (
                        state.error ?
                        <h2>{state.error}</h2> :
                        <h2>Empty Card</h2>
                    )
                )
            }
        </>
    );
};

export default WeatherPlate;