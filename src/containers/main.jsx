import React from 'react';
import './main.less';

export default class Main extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <main className='content-container'>
                {this.props.children}
            </main>
        )
    }
}