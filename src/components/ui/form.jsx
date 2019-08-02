import React from 'react';
import './form.less';
import Input from '../ui/input';
import axios from 'axios';

function validateEmail(email) {
    // var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    // return re.test(String(email).toLowerCase());
    return true;
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
                    style: { width: '300px' },
                    styleDiv: { height: '60px' },
                    valid: true,
                    touched: false,
                },
                email: {
                    value: '',
                    type: 'email',
                    label: 'E-mail',
                    errorMessage: 'введите корректный e-mail',
                    autoFocus: true,
                    style: { width: '300px' },
                    styleDiv: { height: '60px' },
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
                    style: { width: '300px' },
                    styleDiv: { height: '60px', marginBottom: '15px' },
                    errorMessage: 'введите телефон для связи',
                    valid: true,
                    touched: false,
                },
            },
        }
    };


    validateControl(value, validation) {
        if (!validation) return true;

        let isValid = true;

        if (validation.required) {
            isValid = value.trim() !== '' && isValid
        };

        if (validation.email) {
            isValid = validateEmail(value) && isValid
        };

        return isValid;
    };

    onChangeHandler(e, controlName) {
        const formControls = { ...this.state.formControls };
        const control = { ...formControls[controlName] };

        control.value = e.target.value;
        control.touched = true;
        control.valid = this.validateControl(control.value, control.validation);

        formControls[controlName] = control;

        let isFormValid = true;

        Object.keys(formControls).forEach(name => {
            isFormValid = formControls[name].valid && isFormValid;
        });

        this.setState({ formControls, isFormValid });

    };

    renderInputs() {
        return Object.keys(this.state.formControls).map((controlName, index) => {
            const control = this.state.formControls[controlName];
            return (
                <Input
                    key={index}
                    type={control.type}
                    autoFocus={control.autoFocus || false}
                    style={control.style}
                    styleDiv={control.styleDiv}
                    value={control.value}
                    valid={control.valid}
                    touched={control.touched}
                    label={control.label}
                    errorMessage={control.errorMessage}
                    shouldValidate={!!control.validation}
                    onChange={e => this.onChangeHandler(e, controlName)}
                />);
        });
    };

    submitHandler = e => {
        e.preventDefault();
        axios({
            method: 'post',
            url: 'http://localhost/send.php',
            headers: { 'content-type': 'multipart/form-data' },
            data: {
                name: 'sdf',
                email: 'sdf',
                text: 'sdf'
            }
        })
            .then(result => this.setState({ mailSend: result.data.sent }), console.log(result.data))
            .catch(error => this.setState({ errorMailSend: error.message }));
    }

    render() {
        const { onClose } = this.props;
        const htmlFor = `${Math.random()}`;


        return (
            <div className='form-feedback'>
                <form onSubmit={this.submitHandler}>
                    {this.renderInputs()}

                    {
                        this.props.order
                            ? <div className='modal_textarea'>
                                <label htmlFor={htmlFor + 1}>Ваш заказ</label>
                                <textarea
                                    className='input-text'
                                    htmlFor={htmlFor + 1}
                                    disabled
                                    value={this.props.order}
                                />
                            </div>
                            : null
                    }

                    <div className='modal_textarea'>
                        <label htmlFor={htmlFor}>Сообщение</label>
                        <textarea
                            className='input-text'
                            id={htmlFor}
                            maxLength='200'
                            onChange={e => this.setState({ messageText: e.target.value })}
                        />
                        <span>Не более 200 символов</span>
                    </div>
                    <div className='modal-buttons'>
                        <button
                            className='global-button'
                            type='reset'
                            onClick={e => onClose && onClose(e)}
                        >
                            Отмена
                    </button>
                        <button
                            className='global-button'
                            type='submit'
                            disabled={!this.state.isFormValid}
                            onClick={e => this.submitHandler(e)}
                        >
                            Отправить
                    </button>
                    </div>
                </form>
            </div>
        )
    }
};