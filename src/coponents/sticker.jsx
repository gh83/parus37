import React from 'react';
import './sticker.less';
import Menu from './menu';

export default class Sticker extends React.Component{
    constructor(props){
        super(props);
    };

    render(){
        return(
            <div className='sticker'>
                <Menu  type='large'/>
                <div>инфа, картинки и цены про про наклейки</div>
            </div>
        )
    }
}