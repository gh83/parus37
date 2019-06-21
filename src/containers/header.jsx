import React from 'react';
import { NavLink } from 'react-router-dom';
import Menu from '../coponents/menu';
import './header.less';
import Backdrop from '../coponents/ui/backdrop';

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
                <NavLink to='/'>
                    <div className='logo'>
                        <img src='../assets/img/logo.png' />
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
                    <a href='tel:+79051560923'> +7 905 156 0923</a>
                    <a href='mailto:parus37@inbox.ru'>parus37@inbox.ru</a>
                </div>
                <div className='social-icons'>
                    <a target='_blanc' href='https://vk.com/parus37'><i className="fa fa-vk" aria-hidden="true" /></a>
                    <a href='#'><i className="fa fa-instagram" aria-hidden="true" /></a>
                </div>

                {menuOpen ? (<>
                    <Backdrop onClick={e => this.setState({ menuOpen: false })} />
                    <Menu
                        type='mobile'
                        onClick={e => this.setState({ menuOpen: false })}
                    />
                </>) : null}
            </header>
        )
    }
}