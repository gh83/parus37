import React from 'react';
import './footer.less';

export default class Footer extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div className='footer'>
                <span>2019 Мастерская рекламы "Парус"</span>
                <div className='social-icons'>
                    <a target='_blanc' href='https://vk.com/parus37'><i className="fa fa-vk" aria-hidden="true" /></a>
                    <a href='#'><i className="fa fa-instagram" aria-hidden="true" /></a>
                </div>
            </div>
        )
    }
}