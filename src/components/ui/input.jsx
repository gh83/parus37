import React from 'react';
import './input.less';

function isInvalid() {
    return true;
};

const Input = props => {
    const inputType = props.type || 'text';
    const htmlFor = `${inputType}-${Math.random()}`;
    const classList = ['input-form'];

    if (isInvalid(props)) {
        classList.push('invalid');
    };

    return (
        < div className={classList.join(' ')} >
            <label htmlFor={htmlFor}>{props.label}</label>
            <input
                className='input-text'
                style={{ width: '100%' }}
                type={inputType}
                id={htmlFor}
                autoFocus={props.autoFocus}
                value={props.value}
                onChange={props.onChange}
            />
            {
                isInvalid()
                    ? <span>{props.errorMessage || 'Введите верное значение'}</span>
                    : null
            }
        </div >
    )
};

export default Input;