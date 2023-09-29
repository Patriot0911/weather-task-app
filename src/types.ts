import { ReactNode } from "react";
import { z } from "zod";

export interface IModalWindowProps {
    children: ReactNode;
};
export interface IModalProps {
    children: ReactNode;
    isVisible: boolean;
    setVisible: (state: boolean) => void;
};

export interface ISearchContainerProps {
    search: string;
    setSearch: (search: string) => void;
};

export interface IWeaherPlateProps {
    search: string;
};

export interface IWeatherInfoCurrent {
    feelslike_c: number;
    temp_c: number;
    is_day: number;
    last_updated: string;
};
export interface IWeatherInfoLocation {
    name: string;
    country: string;
    localtime: string;
};
export interface IWeatherInfo {
    location: IWeatherInfoLocation;
    current: IWeatherInfoCurrent;
};
export interface IPlateInfo {
    weatherInfo: undefined | IWeatherInfo;
    error: string | undefined;
    loading: boolean;
};

export interface ISearchTitleProps {
    search: string;
};
export interface ISearchProps {
    search: string;
    searchHandle: () => void;
};

export type TisValidWeatherResponseReturnInvalid = [false, z.ZodError];
export type TisValidWeatherResponseReturnValid = [true, IWeatherInfo];
export type isValidWeatherReturn = TisValidWeatherResponseReturnInvalid | TisValidWeatherResponseReturnValid;