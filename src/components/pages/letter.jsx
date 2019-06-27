import React from 'react';
import './letter.less';
import { LetterCost } from '../../data/cost';

export default class Letter extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            letterSize: 1,
            letterStyle: null,
            symbolQuantity: null,
        };
        this.changeSizeLetter = e => this.setState({ letterSize: e.target.value });
        this.changeSymbolQuantity = e => this.setState({ symbolQuantity: (e.target.value).replace(/ /g, '').length });
    };

    changeStyleLetter = style => {
        if (style == 'simple') { this.setState({ letterStyle: LetterCost.style.simple }) };
        if (style == 'notsimple') { this.setState({ letterStyle: LetterCost.style.notSimple }) };
        if (style == 'italic') { this.setState({ letterStyle: LetterCost.style.italic }) };

        // switch (style) {
        //     case 'simple': this.setState({ letterStyle: LetterCost.style.simple });
        //     case 'notsimple': this.setState({ letterStyle: LetterCost.style.notSimple });
        //     case 'italic': this.setState({ letterStyle: LetterCost.style.italic });
        //     default: break;}
    };


    render() {
        const { letterSize, letterStyle, symbolQuantity } = this.state;
        let cost = Math.round(LetterCost.size * letterSize * letterStyle * symbolQuantity);

        return (
            <div className='letter'>
                
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
                            <div
                                onClick={this.changeStyleLetter.bind(this, 'simple')}
                                className={letterStyle == LetterCost.style.simple ? 'active' : ''}
                            >
                                <span>R</span>
                                <span>шрифт простой</span>
                            </div>
                            <div
                                onClick={this.changeStyleLetter.bind(this, 'notsimple')}
                                className={letterStyle == LetterCost.style.notSimple ? 'active' : ''}
                            >
                                <span>R</span>
                                <span>шрифт с засечками</span>
                            </div>
                            <div
                                onClick={this.changeStyleLetter.bind(this, 'italic')}
                                className={letterStyle == LetterCost.style.italic ? 'active' : ''}
                            >
                                <span>R</span>
                                <span>шрифт прописной</span>
                            </div>
                        </div>
                    </div>
                    <div className='calc_text'>
                        <input
                            className='input-text'
                            type='text'
                            placeholder='введите буквы'
                            style={{ width: '100%', maxWidth: '500px' }}
                            onChange={this.changeSymbolQuantity}
                        />
                        <span>Данный расчет не является публичной офертой и может отличаться.</span>
                    </div>

                    <div className='calc_example-cost'>
                        <div className='calc_example-cost_title'>
                            <span>Пример</span>
                            <span>Описание</span>
                            <span>Цена</span>
                        </div>
                        <div className='border'/>
                        {LetterCost.type.map((item, index) => (
                            <div className='calc_template-letter' key={index}>
                                <img src={item.img} />
                                <div className='calc_template-letter_about'>
                                    <span>{item.title}</span>
                                    <ul>
                                        {item.content.map((item, index) => (
                                            <li key={index}>{item}</li>
                                        ))}
                                    </ul>
                                </div>
                                <div className='calc_template-letter_cost'>
                                    <button className='global-button'>заказать</button>
                                    <div>
                                        <span>от&nbsp;</span>
                                        {item.cost * cost}
                                        <span>&nbsp;&#8381;</span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div >
        );
    };
};