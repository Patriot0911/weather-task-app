import { forwardRef } from 'react';
import { ISearchProps } from '../../types';
import SearchTitle from './SearchTitle';
import './Search.css';

export default forwardRef<HTMLInputElement, ISearchProps>(({ search, searchHandle }, inputRef) => {
    return (
        <label>
            <SearchTitle
                search={search}
            />
            <input
                type={'text'}
                ref={inputRef}
                placeholder={'City Name'}
            />
            <button onClick={searchHandle}>
                Search
            </button>
        </label>
    );
});