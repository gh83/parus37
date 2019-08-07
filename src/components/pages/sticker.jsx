import React from 'react';
import './sticker.less';

export default class Sticker extends React.Component{
    constructor(props){
        super(props);
    };

    render(){
        return(
            <div className='sticker'>
               
                <div>инфа, картинки и цены про про наклейки</div>
            </div>
        )
    }
}