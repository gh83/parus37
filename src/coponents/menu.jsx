import React from 'react';
import {NavLink} from 'react-router-dom';
import './menu.less';

export default class Menu extends React.Component{
    constructor(props){
        super(props);
    };

    render(){
        return(
            <nav className='menu'>
                <NavLink activeClassName='active' to='/letter'><div>Объемные буквы</div></NavLink>
                <NavLink activeClassName='active' to='/light-box'><div>Световые короба</div></NavLink>
                <NavLink activeClassName='active' to='/panel'><div>панель кронштейн</div></NavLink>
                <NavLink activeClassName='active' to='/info-stand'><div>Информационные стенды</div></NavLink>
                <NavLink activeClassName='active' to='/table'><div>Таблички</div></NavLink>
                <NavLink activeClassName='active' to='/sticker'><div>Наклейки</div></NavLink>
            </nav>
        )
    }
}