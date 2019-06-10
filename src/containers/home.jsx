import React from 'react';
import { NavLink } from 'react-router-dom';
import './home.less';

export default class Home extends React.Component {
    constructor(props) {
        super(props);
    }

    randomInteger(min, max) {
        let rand = min - 0.5 + Math.random() * (max - min + 1)
        rand = Math.round(rand);
        return rand;
    }

    render() {
        return (
            <>
                <div className='banner' />
                <div className='container_left-text'>
                    <div className='text'>
                        <h1>Объемные буквы</h1>
                        <br />
                        <p>Представляют собой рекламную вывеску из отдельно стоящих
            букв, как с внутренней или наружной
            подсветкой, так и без подсветки. Это самый популярный вид наружной рекламы, т.к. привлекает внимание
            клиентов
            издалека, а также дает возможность замены одной из букв без демонтажа всей вывески.</p>
                    </div>
                    <div className='image'>
                        <NavLink to='/'><div style={{ background: `url(http://lorempixel.com/20${this.randomInteger(0, 9)}/20${this.randomInteger(0, 9)})` }} /></NavLink>
                        <NavLink to='/'><div style={{ background: `url(http://lorempixel.com/20${this.randomInteger(0, 9)}/20${this.randomInteger(0, 9)})` }} /></NavLink>
                        <NavLink to='/'><div style={{ background: `url(http://lorempixel.com/20${this.randomInteger(0, 9)}/20${this.randomInteger(0, 9)})` }} /></NavLink>
                        <NavLink to='/'><div style={{ background: `url(http://lorempixel.com/20${this.randomInteger(0, 9)}/20${this.randomInteger(0, 9)})` }} /></NavLink>
                    </div>
                </div>

                <div className='container_right-text'>
                    <div className='image'>
                        <NavLink to='/'><div style={{ background: `url(http://lorempixel.com/20${this.randomInteger(0, 9)}/20${this.randomInteger(0, 9)})` }} /></NavLink>
                        <NavLink to='/'><div style={{ background: `url(http://lorempixel.com/20${this.randomInteger(0, 9)}/20${this.randomInteger(0, 9)})` }} /></NavLink>
                        <NavLink to='/'><div style={{ background: `url(http://lorempixel.com/20${this.randomInteger(0, 9)}/20${this.randomInteger(0, 9)})` }} /></NavLink>
                        <NavLink to='/'><div style={{ background: `url(http://lorempixel.com/20${this.randomInteger(0, 9)}/20${this.randomInteger(0, 9)})` }} /></NavLink>
                    </div>
                    <div className='text'>
                        <h1>Световые короба</h1>
                        <br />
                        <p> Световой короб - вывеска прямоугольной или сложной формы с подсветкой изнутри. Является самым
          популярным вариантом в наружной рекламе.</p>
                    </div>
                </div>

                <div className='container_left-text'>
                    <div className='text'>
                        <h1>панель кронштейн</h1>
                        <br />
                        <p>очень важная информация про эти самые панели кронштейны</p>
                    </div>
                    <div className='image'>
                        <NavLink to='/'><div style={{ background: `url(http://lorempixel.com/20${this.randomInteger(0, 9)}/20${this.randomInteger(0, 9)})` }} /></NavLink>
                        <NavLink to='/'><div style={{ background: `url(http://lorempixel.com/20${this.randomInteger(0, 9)}/20${this.randomInteger(0, 9)})` }} /></NavLink>
                        <NavLink to='/'><div style={{ background: `url(http://lorempixel.com/20${this.randomInteger(0, 9)}/20${this.randomInteger(0, 9)})` }} /></NavLink>
                        <NavLink to='/'><div style={{ background: `url(http://lorempixel.com/20${this.randomInteger(0, 9)}/20${this.randomInteger(0, 9)})` }} /></NavLink>
                    </div>
                </div>

                <div className='container_right-text'>
                    <div className='image'>
                        <NavLink to='/'><div style={{ background: `url(http://lorempixel.com/20${this.randomInteger(0, 9)}/20${this.randomInteger(0, 9)})` }} /></NavLink>
                        <NavLink to='/'><div style={{ background: `url(http://lorempixel.com/20${this.randomInteger(0, 9)}/20${this.randomInteger(0, 9)})` }} /></NavLink>
                        <NavLink to='/'><div style={{ background: `url(http://lorempixel.com/20${this.randomInteger(0, 9)}/20${this.randomInteger(0, 9)})` }} /></NavLink>
                        <NavLink to='/'><div style={{ background: `url(http://lorempixel.com/20${this.randomInteger(0, 9)}/20${this.randomInteger(0, 9)})` }} /></NavLink>
                    </div>
                    <div className='text'>
                        <h1>Информационные стенды.</h1>
                        <br />
                        <p> Это один из самых распространенных способов размещения информации. Стенды изготавливаются из ПВХ или
          композитного материала. Информация на стенде размещается в кармашках различного формата, которые могут быть
          изготовлены из оргстекла или ПЭТ. По желанию заказчика стенды могут обрамляться алюминиевой рамкой,
          позволяющей защитить их от механического воздействия.</p>
                    </div>
                </div>

                <div className='container_left-text'>
                    <div className='text'>
                        <h1>Таблички.</h1>
                        <br />
                        <p>Табличка – это рекламная конструкция, которая кроме названия и
            логотипа содержит ещё и
            информацию о
            предоставляемых услугах и товарах и графике работы. Табличка - отличное решение для недорогой, но заметной
            рекламы, потому что это первое, что видит клиент.</p>
                    </div>
                    <div className='image'>
                        <NavLink to='/'><div style={{ background: `url(http://lorempixel.com/20${this.randomInteger(0, 9)}/20${this.randomInteger(0, 9)})` }} /></NavLink>
                        <NavLink to='/'><div style={{ background: `url(http://lorempixel.com/20${this.randomInteger(0, 9)}/20${this.randomInteger(0, 9)})` }} /></NavLink>
                        <NavLink to='/'><div style={{ background: `url(http://lorempixel.com/20${this.randomInteger(0, 9)}/20${this.randomInteger(0, 9)})` }} /></NavLink>
                        <NavLink to='/'><div style={{ background: `url(http://lorempixel.com/20${this.randomInteger(0, 9)}/20${this.randomInteger(0, 9)})` }} /></NavLink>
                    </div>
                </div>

                <div className='container_right-text'>
                    <div className='image'>
                        <NavLink to='/'><div style={{ background: `url(http://lorempixel.com/20${this.randomInteger(0, 9)}/20${this.randomInteger(0, 9)})` }} /></NavLink>
                        <NavLink to='/'><div style={{ background: `url(http://lorempixel.com/20${this.randomInteger(0, 9)}/20${this.randomInteger(0, 9)})` }} /></NavLink>
                        <NavLink to='/'><div style={{ background: `url(http://lorempixel.com/20${this.randomInteger(0, 9)}/20${this.randomInteger(0, 9)})` }} /></NavLink>
                        <NavLink to='/'><div style={{ background: `url(http://lorempixel.com/20${this.randomInteger(0, 9)}/20${this.randomInteger(0, 9)})` }} /></NavLink>
                    </div>
                    <div className='text'>
                        <h1>Наклейки</h1>
                        <br />
                        <p></p>
                    </div>
                </div>
            </>
        )
    }
}