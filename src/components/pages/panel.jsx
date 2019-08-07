import React from 'react';
import './panel.less';
import { PanelCost } from '../../data/panel-cost';
import Modal from '../ui/modal';

export default class Panel extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            panelHeight: 1,
            panelWidth: 1,
            showForm: undefined
        };

        this.changePanelHeight = e => this.setState({ panelHeight: e.target.value });
        this.changePanelWidth = e => this.setState({ panelWidth: e.target.value });
    };

    randomInteger(min, max) {
        let rand = min - 0.5 + Math.random() * (max - min + 1)
        rand = Math.round(rand);
        return rand;
    }

    order(cost, height, width, title) {
        return (
            'Панель кронштейн' + '\n' +
            'высота: ' + height + ' m,' + ' ширина: ' + width + ' m' + '\n' +
            'материал: ' + title + '\n' +
            'цена от: ' + cost + ' руб'
        );
    };

    render() {
        const { panelHeight, panelWidth, showForm } = this.state;
        return (
            <div className='panel'>
                <div className='panel_calc'>
                    <div className='panel_calc_size'>
                        <div className='panel_calc_slider-y'>
                            <input
                                className='input-y'
                                type="range"
                                min=".2"
                                max="6"
                                step='.1'
                                onChange={this.changePanelHeight}
                                value={panelHeight}
                            />
                            <div className='panel_calc_banner' />
                            <div className='slider-y_label'>
                                <input
                                    className='input-text'
                                    type='text'
                                    value={panelHeight}
                                    onChange={this.changePanelHeight}
                                />
                                <div>m</div>
                            </div>
                        </div>
                        <div className='panel_calc_slider-x'>
                            <input
                                className='input-x'
                                type="range"
                                min=".2"
                                max="2"
                                step='.1'
                                onChange={this.changePanelWidth}
                                value={panelWidth}
                            />
                            <div className='slider-x_label'>
                                <input
                                    className='input-text'
                                    type='text'
                                    value={panelWidth}
                                    onChange={this.changePanelWidth}
                                />
                                <div>m</div>
                            </div>
                        </div>
                    </div>
                    <div className='panel_calc_template-cost'>
                        <div className='panel_calc_template-title'>
                            <span>Пример</span>
                            <span />
                            <span />
                            <span>Описание</span>
                            <span />
                            <span>Цена</span>
                        </div>
                        <div className='border' />
                        {PanelCost.type.map((item, index) => (
                            <div key={index} className='panel_calc_template'>
                                {
                                    showForm == index
                                        ? <>
                                            <Modal
                                                onClick={e => this.setState({ showForm: undefined })}
                                                onClose={e => this.setState({ showForm: undefined })}
                                                order={this.order(Math.round(item.cost * panelHeight * panelWidth), panelHeight, panelWidth, item.title)}
                                            />
                                        </>
                                        : null
                                }
                                <img src={`http://lorempixel.com/25${this.randomInteger(0, 9)}/15${this.randomInteger(0, 9)}`} />
                                <div className='about-title'>
                                    {item.title}
                                </div>
                                <div className='calc_template-panel_cost'>
                                    <button
                                        className='global-button'
                                        onClick={e => this.setState({ showForm: index })}
                                    >
                                        заказать
                                    </button>
                                    <div>
                                        <span>от&nbsp;</span>
                                        {Math.round(item.cost * panelHeight * panelWidth)}
                                        <span>&nbsp;&#8381;</span>
                                    </div>
                                </div>
                            </div>
                        ))}
                        <div className='panel_discription'>
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