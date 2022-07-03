import React from 'react';
import ReactDOM from 'react-dom';
import './Modal.css';
//const modal = ReactDOM.createRoot(document.getElementById('modal'));
//modal.createPortal(
//  <App />
//);

function Modal({ children }) {
    return ReactDOM.createPortal(
        <div className='ModalBackground'>
            {children}
        </div>,
        document.getElementById('modal')
    );
}

export {Modal};