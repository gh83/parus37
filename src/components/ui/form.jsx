import React from 'react';

import './form.less';
import Input from '../ui/input';
import axios from 'axios';

function validateEmail(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
};

export default class FormFeedBack extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            mailSend: false,
            errorMailSend: '',
            isFormValid: false,
            messageText: '',
            order: this.props.order || null,
            formControls: {
                name: {
                    value: '',
                    type: 'text',
                    label: 'Ваше имя',
                    errorMessage: ' ',
                    autoFocus: false,
                    valid: true,
                    touched: false,
                },
                email: {
                    value: '',
                    type: 'email',
                    label: 'E-mail',
                    errorMessage: 'введите корректный e-mail',
                    autoFocus: true,
                    valid: false,
                    touched: false,
                    validation: {
                        required: true,
                        email: true
                    }
                },
                phone: {
                    value: '',
                    type: 'tel',
                    label: 'Телефон для связи',
                    errorMessage: 'введите телефон для связи',
                    valid: true,
                    touched: false,
                }
            }
        };
    };


    validateControl(value, validation) {
        if (!validation)
            return true;

        let isValid = true;

        if (validation.required)
            isValid = ((value.trim() !== '') && isValid)

        if (validation.email)
            isValid = (validateEmail(value) && isValid)

        return isValid;
    };

    onChangeHandler(e, controlName) {
        const { formControls } = this.state;
        const control = formControls[controlName];

        control.value = e.target.value;
        control.touched = true;
        control.valid = this.validateControl(control.value, control.validation);

        let isFormValid = true;
        Object.keys(formControls).forEach(name => isFormValid = (formControls[name].valid && isFormValid));
        this.setState({ formControls, isFormValid });
    };

    renderInputs() {
        const { formControls } = this.state;
        return Object.keys(formControls).map((controlName, key) => {
            const { type, autoFocus, style, styleDiv, value, valid, touched, label, errorMessage, validation } = formControls[controlName];
            return (
                <Input key={key} type={type} autoFocus={autoFocus} style={style} styleDiv={styleDiv} value={value} valid={valid} touched={touched}
                    label={label} errorMessage={errorMessage} shouldValidate={!!validation} onChange={e => this.onChangeHandler(e, controlName)} />
            );
        });
    };

    submitHandler(e) {
        const { formControls = {}, messageText, order } = this.state;
        const { onClose } = this.props;
        const { name, phone, email } = formControls;
        e.preventDefault();
        axios({
            method: 'post',
            url: '/send.php',
            headers: { 'content-type': 'multipart/form-data' },
            data: {
                name: name.value,
                phone: phone.value,
                email: email.value,
                text: messageText,
                order: order,
            }
        })
            .then(result => this.setState({ mailSend: result.data.sent }))
            .catch(error => this.setState({ errorMailSend: error.message }));
        onClose && onClose(e);
    };

    render() {
        const { onClose, order } = this.props;
        const { isFormValid } = this.state;

        return (
            <div className='form-feedback'>
                <form>
                    {this.renderInputs()}
                    {this.props.order ? (
                        <div className='modal_textarea'>
                            <label htmlFor='1'>Ваш заказ</label>
                            <textarea className='input-text' htmlFor='1' disabled value={order} />
                        </div>
                    ) : null}
                    <div className='modal_textarea'>
                        <label htmlFor='2'>Сообщение</label>
                        <textarea className='input-text' id='2' maxLength='200' onChange={e => this.setState({ messageText: e.target.value })} />
                        <span>Не более 200 символов</span>
                    </div>
                    <div className='modal-buttons'>
                        <button className='global-button' type='reset' onClick={e => onClose && onClose(e)}>Отмена</button>
                        <button className='global-button' type='submit' disabled={!isFormValid} onClick={e => this.submitHandler(e)}>Отправить</button>
                    </div>
                </form>
            </div>
        );
    };
};