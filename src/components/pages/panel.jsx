import React from 'react';
import './panel.less';

export default class Panel extends React.Component{
    constructor(props){
        super(props);
    };

    render(){
        return(
            <div className='panel'>
                
                <div>инфа, картинки и цены про про панели</div>
            </div>
        )
    }
}