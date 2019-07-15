import React from 'react';
import './form.less';
import Input from '../ui/input';

export default class FormFeedBack extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { onClose } = this.props;
        return (
            <div className='form-feedback'>
                <Input
                    label='e-mail'
                    autoFocus={true}
                    errorMessage='test'
                />
                <Input label='phone' />
                <button onClick={e => onClose && onClose(e)}>close</button>
            </div>
        )
    }
};