import { IWeatherInfo, isValidWeatherReturn } from '../types';
import weatherSchema from './weatherSchema';


const isValidWeatherResponse = (response: any): isValidWeatherReturn => {

    const result = weatherSchema.safeParse(response);
    if(!result.success)
        return [false, result.error];
    const weatherData: IWeatherInfo = {
        current: {
            feelslike_c: response.current.feelslike_c,
            temp_c: response.current.temp_c,
            is_day: response.current.is_day,
            last_updated: response.current.last_update
        },
        location: {
            name: response.location.name,
            country: response.location.country,
            localtime: response.location.localtime
        }
    };
    return [true, weatherData];
};

export default isValidWeatherResponse;