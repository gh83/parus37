import React from 'react';
import './letter.less';
import { LetterCost } from '../data/cost';


export default class Letter extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            letterSize: 1,
            letterStyle: null,
        };
        this.changeSizeLetter = e => this.setState({ letterSize: e.target.value });
    };

    render() {
        const { letterSize } = this.state;
        return (
            <div className='letter'>
                <div>menu</div>
                <div className='calc'>
                    <div className='calc_size-letter'>
                        <div className='slider-y'>
                            <input
                                className='input-y'
                                type="range"
                                min=".15"
                                max="12"
                                step='.05'
                                onChange={this.changeSizeLetter}
                                value={letterSize}
                            />
                            <div className='slider-y_label'>
                                <input
                                    className='input-text'
                                    type='text'
                                    value={letterSize}
                                    onChange={this.changeSizeLetter}
                                />
                                <div>m</div>
                            </div>
                            <div className='calc-banner' />
                        </div>
                        <div className='calc_letter-select'>
                            <div>
                                <span>R</span>
                                <span>шрифт простой</span>
                            </div>
                            <div>
                                <span>R</span>
                                <span>шрифт с засечками</span>
                            </div>
                            <div>
                                <span>R</span>
                                <span>шрифт прописной</span>
                            </div>
                        </div>
                    </div>
                    <div className='calc_text'></div>
                    <div className='calc_example-cost'></div>
                </div>
            </div >
        );
    };
};