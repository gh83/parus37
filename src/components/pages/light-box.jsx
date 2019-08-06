import React from 'react';
import './light-box.less';
import { LightBoxCost } from '../../data/light-box-cost';
import Modal from '../ui/modal';

export default class LightBox extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            lightBoxHeight: 1,
            lightBoxWidth: 1,
            showForm: undefined
        };

        this.changeLightBoxHeight = e => this.setState({ lightBoxHeight: e.target.value });
        this.changeLightBoxWidth = e => this.setState({ lightBoxWidth: e.target.value });
    };

    randomInteger(min, max) {
        let rand = min - 0.5 + Math.random() * (max - min + 1)
        rand = Math.round(rand);
        return rand;
    }

    order(cost, height, width, title) {
        return (
            'Световой короб' + '\n' +
            'высота: ' + height + ' m,' + ' ширина: ' + width + ' m' + '\n' +
            'материал: ' + title + '\n' +
            'цена от: ' + cost + ' руб'
        );
    };

    render() {
        const { lightBoxHeight, lightBoxWidth, showForm } = this.state;
        return (
            <div className='light-box'>
                <div className='light-box_calc'>
                    <div className='light-box_calc_size'>
                        <div className='light-box_calc_slider-y'>
                            <input
                                className='input-y'
                                type="range"
                                min=".2"
                                max="2"
                                step='.1'
                                onChange={this.changeLightBoxHeight}
                                value={lightBoxHeight}
                            />
                            <div className='light-box_calc_banner' />
                            <div className='slider-y_label'>
                                <input
                                    className='input-text'
                                    type='text'
                                    value={lightBoxHeight}
                                    onChange={this.changeLightBoxHeight}
                                />
                                <div>m</div>
                            </div>
                        </div>
                        <div className='light-box_calc_slider-x'>
                            <input
                                className='input-x'
                                type="range"
                                min=".2"
                                max="12"
                                step='.1'
                                onChange={this.changeLightBoxWidth}
                                value={lightBoxWidth}
                            />
                            <div className='slider-x_label'>
                                <input
                                    className='input-text'
                                    type='text'
                                    value={lightBoxWidth}
                                    onChange={this.changeLightBoxWidth}
                                />
                                <div>m</div>
                            </div>
                        </div>
                    </div>
                    <div className='light-box_calc_template-cost'>
                        <div className='light-box_calc_template-title'>
                            <span>Пример</span>
                            <span />
                            <span />
                            <span>Описание</span>
                            <span />
                            <span>Цена</span>
                        </div>
                        <div className='border' />
                        {LightBoxCost.type.map((item, index) => (
                            <div key={index} className='light-box_calc_template'>
                                {
                                    showForm == index
                                        ? <>
                                            <Modal
                                                onClick={e => this.setState({ showForm: undefined })}
                                                onClose={e => this.setState({ showForm: undefined })}
                                                order={this.order(Math.round(item.cost * lightBoxHeight * lightBoxWidth), lightBoxHeight, lightBoxWidth, item.title)}
                                            />
                                        </>
                                        : null
                                }
                                <img src={`http://lorempixel.com/25${this.randomInteger(0, 9)}/15${this.randomInteger(0, 9)}`} />
                                <div className='about-title'>
                                    {item.title}
                                </div>
                                <div className='calc_template-light-box_cost'>
                                    <button
                                        className='global-button'
                                        onClick={e => this.setState({ showForm: index })}
                                    >
                                        заказать
                                    </button>
                                    <div>
                                        <span>от&nbsp;</span>
                                        {Math.round(item.cost * lightBoxHeight * lightBoxWidth)}
                                        <span>&nbsp;&#8381;</span>
                                    </div>
                                </div>
                            </div>
                        ))}
                        <div className='light-box_discription'>
                            <span>Подсветка - светодиоды</span>
                            <span>Данный расчет не является публичной офертой и может отличаться от конечной стоимости.</span>
                            <span>*Борта - алюминиевый профиль, лицевая поверхность - поликарбонат+печать 1440dpi</span>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}