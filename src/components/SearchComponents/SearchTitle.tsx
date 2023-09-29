import { ISearchTitleProps } from '../../types';

const SearchTitle = ({ search }: ISearchTitleProps) => {
    return (
        <>
            {
                search ?
                <h1 className={'search-title'}>
                    Current request: {search}
                </h1> :
                <h1 className={'search-title'}>
                    Enter a city name to get weather data
                </h1>
            }
        </>
    );
};

export default SearchTitle;