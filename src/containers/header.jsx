import React from 'react';
import { NavLink } from 'react-router-dom';
import Menu from '../components/others/menu';
import './header.less';
import Backdrop from '../components/ui/backdrop';
import SocialIcons from '../components/ui/social-icons';

export default class Header extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            menuOpen: false
        }
    }
    render() {
        const { menuOpen } = this.state;
        return (
            <header>
                <div>
                    <NavLink to='/'>
                        <div className='logo'>
                            <img src='../assets/img/logo-without-back.png' />
                            <i className="fa fa-home" aria-hidden="true" />
                        </div>
                    </NavLink>

                    <div
                        className='mobile-menu-icon'
                        onClick={e => this.setState({ menuOpen: !menuOpen })}
                    >
                        <i className="fa fa-bars" aria-hidden="true" />
                    </div>
                    <div className='contacts'>
                        <div>
                            <i className="fa fa-phone" aria-hidden="true" />
                            <a href='tel:+79051560923'> +7 905 156 0923</a>
                        </div>
                        <div>
                            <i className="fa fa-envelope-o" aria-hidden="true" />
                            <a href='mailto:parus37@inbox.ru'>Parus37@inbox.ru</a>
                        </div>
                    </div>
                    <SocialIcons />
                    {menuOpen ? (<>
                        <Backdrop onClick={e => this.setState({ menuOpen: false })} />
                        <Menu
                            type='mobile'
                            onClick={e => this.setState({ menuOpen: false })}
                        />
                    </>) : null}
                </div>
                <div>
                    <Menu type='header' />
                </div>
            </header>
        )
    }
}