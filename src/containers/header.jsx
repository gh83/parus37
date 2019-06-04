import React from 'react';
import './header.less';

export default class Header extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <header>
                <div className='logo'>
                    <img src='../assets/img/logo.png' />
                </div>
                <div className='contacts'>
                    <a href='tel:+79051560923'> +7 905 156 0923</a>
                    <a href='mailto:parus37@inbox.ru'>parus37@inbox.ru</a>
                </div>
                <div className='social-icons'>
                    <a href='#'><i className="fa fa-vk" aria-hidden="true" /></a>
                    <a href='#'><i className="fa fa-instagram" aria-hidden="true" /></a>
                </div>
            </header>
        )
    }
}