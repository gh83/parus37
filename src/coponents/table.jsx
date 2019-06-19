import React from 'react';
import './table.less';
import Menu from './menu';

export default class Table extends React.Component{
    constructor(props){
        super(props);
    };

    render(){
        return(
            <div className='table'>
                <Menu/>
                <div>инфа, картинки и цены про про таблички</div>
            </div>
        )
    }
}