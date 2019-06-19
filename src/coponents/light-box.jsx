import React from 'react';
import './light-box.less';
import Menu from './menu';

export default class LightBox extends React.Component{
    constructor(props){
        super(props);
    };

    render(){
        return(
            <div className='light-box'>
                <Menu/>
                <div>инфа, картинки и цены про световые короба</div>
            </div>
        )
    }
}