import React from 'react';
import './letter.less';
import Slider from 'react-input-slider';
import styleSlider from '../helpers/slider-style';

export default class Letter extends React.Component {
    constructor(props) {
        super(props);

        this.state = { letterSize: 30 };
    };

    render() {
        const { letterSize } = this.state;
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

            <div className='slider'>{'y: ' + letterSize}</div>
            <Slider
                styles={styleSlider}
                axis="y"
                ystep={1}
                ymin={0}
                ymax={100}
                y={letterSize}
                onChange={({ y }) => this.setState({ letterSize: parseFloat(y.toFixed(2)) })}
            />
        </>

        )
    }
}