import React from 'react';
import './letter.less';
import Slider from 'react-input-slider';


export default class Letter extends React.Component {
    constructor(props) {
        super(props);

        this.state = { y: 30 };
    };

    

    styleSlider = {
        track: {
            backgroundColor: 'blue'
        },
        active: {
            backgroundColor: 'red'
        },
        thumb: {
            width: 40,
            height: 40,
            opacity: 0.8
        }
    }

    render() {

        return (<>
            {/* <div className='horisontal-slider'>{'x: ' + this.state.x}</div>
            <Slider
                styles={this.styleSlider}
                axis="x"
                xstep={1}
                xmin={0}
                xmax={100}
                x={this.state.x}
                onChange={({ x }) => this.setState({ x: parseFloat(x.toFixed(2)) })}
            /> */}

            <div className='horisontal-slider'>{'y: ' + this.state.y}</div>
            <Slider
                axis="y"
                ystep={1}
                ymin={0}
                ymax={100}
                y={this.state.y}
                onChange={({ y }) => this.setState({ y: parseFloat(y.toFixed(2)) })}
            />
        </>

        )
    }
}