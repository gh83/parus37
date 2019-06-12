import React from 'react';
import './letter.less';


export default class Letter extends React.Component {
    constructor(props) {
        super(props);

        this.state = { letterSize: 10 };

        this.changeSizeLetter = e => this.setState({letterSize: e.target.value});
    };

    render() {
        const { letterSize } = this.state;
        return (
            <div className='letter'>
                <div className='slider-y'>
                    <div className='slider-y_label'>{letterSize + ' m'}</div>
                    <input
                        id='input-y'
                        className='input-y'
                        type="range"
                        min="1"
                        max="100"
                        step='1'
                        onChange={this.changeSizeLetter}
                        // onInput={this.changeSizeLetter}
                        defaultValue={letterSize}
                    />
                    <input
                        id='label_input-y'
                        type='text'
                        value={letterSize}
                        onChange={this.changeSizeLetter}
                    />
                </div>
            </div >
        )
    }
}