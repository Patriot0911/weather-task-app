import { useRef, useState } from 'react';
import { ISearchContainerProps } from '../../types';
import Modal from '../ModalComponent/Modal';
import Search from './Search';

const SearchContainer = ({ search, setSearch }: ISearchContainerProps) => {
    const [isVisible, setVisible] = useState(false);
    const inputRef = useRef<HTMLInputElement>(null);

    const searchHandle = () => {
        if(
            inputRef.current?.value
            && inputRef.current?.value.length > 3
            && inputRef.current?.value.length < 25
        ) {
            setSearch(inputRef.current!.value);
        } else {
            setVisible(true);
        }
    };

    return (
        <>
            <Modal
                isVisible={isVisible}
                setVisible={setVisible}
            >
                Unable to search for this query
            </Modal>
            <Search
                search={search}
                searchHandle={searchHandle}
                ref={inputRef}
            />
        </>
    );
};


export default SearchContainer;