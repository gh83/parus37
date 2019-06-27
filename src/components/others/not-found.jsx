import React from 'react';
import './not-found.less';

export default class NotFound extends React.Component {
    render() {
        return (
            <div className='not-found'>
                <h1>упс...</h1>
                <br />
                <i className="fa fa-exclamation-triangle" aria-hidden="true" />
                <br />
                <h1>что-то пошло не так</h1>
            </div>
        )
    }
}