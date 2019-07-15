import React from 'react';
import './info-stand.less';
import FormFeedBack from '../ui/form';
import Backdrop from '../ui/backdrop';

export default class InfoStand extends React.Component {
    constructor(props) {
        super(props);
    };

    render() {
        return (
            <div className='info-stand'>
                <Backdrop />
                <FormFeedBack />
            </div>
        )
    }
}