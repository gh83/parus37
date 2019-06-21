import React from 'react';
import './panel.less';
import Menu from './menu';

export default class Panel extends React.Component{
    constructor(props){
        super(props);
    };

    render(){
        return(
            <div className='panel'>
                <Menu  type='large'/>
                <div>инфа, картинки и цены про про панели</div>
            </div>
        )
    }
}