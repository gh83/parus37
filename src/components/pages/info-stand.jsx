import React from 'react';
import './info-stand.less';

export default class InfoStand extends React.Component{
    constructor(props){
        super(props);
    };

    render(){
        return(
            <div className='info-stand'>
              
                <div>инфа, картинки и цены про про стэнды</div>
            </div>
        )
    }
}