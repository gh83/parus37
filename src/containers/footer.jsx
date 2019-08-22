import React from 'react';
import { NavLink } from 'react-router-dom';

import './footer.less';
import SocialIcons from '../components/ui/social-icons';

export default class Footer extends React.Component {
    constructor(props) {
        super(props);
    };

    render() {
        return (
            <footer>
                <div className='footer_logo'>
                    <img src='/assets/img/logo-without-back.png' />
                </div>

                <div className='footer_contacts'>
                    <a href='tel:+79051560923'>
                        <i className="fa fa-phone" aria-hidden="true" />
                        <span>+7 905 156 0923</span>
                    </a>
                    <a href='mailto:parus37@inbox.ru'>
                        <i className="fa fa-envelope-o" aria-hidden="true" />
                        <span>Parus37@inbox.ru</span>
                    </a>
                    <div>
                        <i className="fa fa-map-marker" aria-hidden="true" />
                        <span>Адрес офиса: 153032, Россия, Иваново ул. Поляковой 8б</span>
                    </div>
                </div>

                <div className='footer_button-price'>
                    <NavLink to='/price'>
                        <button className='global-button'>
                            <i className="fa fa-file-text-o" aria-hidden="true" />
                            <span>прайс лист</span>
                        </button>
                    </NavLink>
                </div>

                <SocialIcons />
            </footer>
        );
    };
};