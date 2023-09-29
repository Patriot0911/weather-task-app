import { createPortal } from 'react-dom';
import { IModalWindowProps, IModalProps } from '../../types';
import './Modal.css';

const ModalWindow = ({ children }: IModalWindowProps) => {
    return (
        <div className={'modal-window'}>
            <h1>INFO</h1>
            {children}
        </div>
    );
};

const Modal = ({ children, isVisible, setVisible }: IModalProps) => {
    return (
        <>
            {
                isVisible &&
                createPortal(
                    <ModalWindow>
                        {children}
                        <br />
                        <button
                            className={'modal-close'}
                            onClick={
                                () => setVisible(false)
                            }
                        >
                            Close
                        </button>
                    </ModalWindow>,
                    document.body
                )
            }
        </>
    );
};

export default Modal;