import { IPlateInfo } from "../types";

interface IWeatherActions {
    type: string;
    params: any;
};

export default function weatherReducer(state: IPlateInfo, actions: IWeatherActions) {
    switch (actions.type) {
        case 'setLoading':
            return {
                ...state,
                loading: actions.params
            }
        case 'setError':
            return {
                ...state,
                loading: false,
                error: actions.params
            }
        case 'setWeatherInfo':
            return {
                weatherInfo: actions.params,
                loading: false,
                error: undefined
            }
        default:
            return state;
    }
    return state;
};