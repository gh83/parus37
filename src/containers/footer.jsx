import React from 'react';
import './footer.less';
import SocialIcons from '../coponents/ui/social-icons';

export default class Footer extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div className='footer'>
                <span>2019 Мастерская рекламы "Парус"</span>
                <SocialIcons />
            </div>
        )
    }
}