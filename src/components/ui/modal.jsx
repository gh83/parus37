import React from 'react';
import './modal.less';
import Backdrop from './backdrop';
import FormFeedBack from './form';

const Modal = props => (
    <div className='modal'>
        <Backdrop
            onClick={props.onClick}
        />
        <FormFeedBack
            onClose={props.onClose}
            order={props.order}
        />
    </div>
)

export default Modal;







