import React from 'react';
import './letter.less';

import { LetterCost } from '../../data/letter-cost';
import Modal from '../ui/modal';

export default class Letter extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isLetterStyleSelect: false,
      isSymbolInput: false,
      letterSize: 50,
      letterStylePrice: null,
      letterStyle: null,
      orderString: '',
      symbolQuantity: null,
      showForm: undefined
    };
    this.changeSizeLetter = e => this.setState({ letterSize: e.target.value });

    this.changeSymbolQuantity = e => {
      let symbolQuantity = this.state.symbolQuantity;
      let isSymbolInput = this.state.isSymbolInput;
      let orderString = this.state.orderString;

      orderString = e.target.value;
      symbolQuantity = orderString.replace(/ /g, '').length;

      if (symbolQuantity > 0) {
        isSymbolInput = true;
      } else {
        isSymbolInput = false;
      };

      this.setState({ symbolQuantity, isSymbolInput, orderString });
    };
  };

  changeStyleLetter = style => {
    switch (style) {
      case 'simple':
        this.setState({ letterStylePrice: LetterCost.style.simple.cost, letterStyle: LetterCost.style.simple.name, isLetterStyleSelect: true });
        break;
      case 'notsimple':
        this.setState({ letterStylePrice: LetterCost.style.notSimple.cost, letterStyle: LetterCost.style.notSimple.name, isLetterStyleSelect: true });
        break;
      case 'italic':
        this.setState({ letterStylePrice: LetterCost.style.italic.cost, letterStyle: LetterCost.style.italic.name, isLetterStyleSelect: true });
        break;
    }
  };

  order(cost, size, style, count, string, title) {
    return `Объемные световые буквы   
Надпись ${string}
количество символов: ${count}  Размер: ${size} см.
Стиль: ${style}
${title}
цена: от ${cost} руб.`
  };


  render() {
    const { letterSize, letterStyle, letterStylePrice, orderString, symbolQuantity, showForm, isSymbolInput, isLetterStyleSelect } = this.state;
    const cost = Math.round(letterSize * letterStylePrice * symbolQuantity);

    return (
      <div className='letter'>

        <div className='calc'>
          <div className='calc_size-letter'>
            <div className='slider-y'>
              <input
                className='input-y'
                type="range"
                min="10"
                max="100"
                step='10'
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
                <div>cm</div>
              </div>
              <div className='calc-banner' />
            </div>
            <div className='calc_letter-select'>
              <div
                onClick={this.changeStyleLetter.bind(this, 'simple')}
                className={letterStyle == LetterCost.style.simple.name ? 'active' : ''}
              >
                <span>R</span>
                <span>шрифт простой</span>
              </div>
              <div
                onClick={this.changeStyleLetter.bind(this, 'notsimple')}
                className={letterStyle == LetterCost.style.notSimple.name ? 'active' : ''}
              >
                <span>R</span>
                <span>шрифт с засечками</span>
              </div>
              <div
                onClick={this.changeStyleLetter.bind(this, 'italic')}
                className={letterStyle == LetterCost.style.italic.name ? 'active' : ''}
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
            <span>Данный расчет не является публичной офертой и может отличаться от конечной стоимости.</span>
          </div>

          <div className='calc_example-cost'>
            <div className='calc_example-cost_title'>
              <span>Пример</span>
              <span>Описание</span>
              <span>Цена</span>
            </div>
            <div className='border' />
            {LetterCost.type.map((item, index) => (
              <div className='calc_template-letter' key={index}>
                {
                  (showForm === index)
                    ? <>
                      <Modal
                        onClick={e => this.setState({ showForm: undefined })}
                        onClose={e => this.setState({ showForm: undefined })}
                        order={this.order(cost * item.cost, letterSize, letterStyle, symbolQuantity, orderString, item.title)}
                      />
                    </>
                    : null
                }
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
                  <button
                    onClick={e => this.setState({ showForm: index })}
                    className='global-button'
                    disabled={!(isSymbolInput && isLetterStyleSelect)}
                  >
                    заказать
                                    </button>
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