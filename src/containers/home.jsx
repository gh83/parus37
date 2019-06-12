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
                    <div className='image-container'>
                        <NavLink to='/letter'>
                            <div className='image' style={{ background: `url(../assets/img/site/letter-1.jpg)` }} >
                                <div className='image_label'>
                                    <span>3D буквы</span>
                                </div>
                            </div>
                        </NavLink>
                    </div>
                </div>


                <div className='border' />


                <div className='container_right-text'>
                    <div className='image-container'>
                        <NavLink to='/'>
                            <div className='image' style={{ background: `url(http://lorempixel.com/20${this.randomInteger(0, 9)}/20${this.randomInteger(0, 9)})` }} >
                                <div className='image_label'>

                                </div>
                            </div>
                        </NavLink>
                        <NavLink to='/'>
                            <div className='image' style={{ background: `url(http://lorempixel.com/20${this.randomInteger(0, 9)}/20${this.randomInteger(0, 9)})` }} >
                                <div className='image_label'>

                                </div>
                            </div>
                        </NavLink>
                        <NavLink to='/'>
                            <div className='image' style={{ background: `url(http://lorempixel.com/20${this.randomInteger(0, 9)}/20${this.randomInteger(0, 9)})` }} >
                                <div className='image_label'>

                                </div>
                            </div>
                        </NavLink>
                        <NavLink to='/'>
                            <div className='image' style={{ background: `url(http://lorempixel.com/20${this.randomInteger(0, 9)}/20${this.randomInteger(0, 9)})` }} >
                                <div className='image_label'>

                                </div>
                            </div>
                        </NavLink>
                    </div>
                    <div className='text'>
                        <h1>Световые короба</h1>
                        <br />
                        <p> Световой короб - вывеска прямоугольной или сложной формы с подсветкой изнутри. Является самым
          популярным вариантом в наружной рекламе.</p>
                    </div>
                </div>


                <div className='border' />


                <div className='container_left-text'>
                    <div className='text'>
                        <h1>панель кронштейн</h1>
                        <br />
                        <p>это односторонняя или двусторонняя конструкция, которая крепится к стенам домов и мачтам уличного освещения. Используется при размещении наружной рекламы. Данное изделие является разновидностью светового короба.</p>
                    </div>
                    <div className='image-container'>
                        <NavLink to='/'>
                            <div className='image' style={{ background: `url(http://lorempixel.com/20${this.randomInteger(0, 9)}/20${this.randomInteger(0, 9)})` }} >
                                <div className='image_label'>

                                </div>
                            </div>
                        </NavLink>
                        <NavLink to='/'>
                            <div className='image' style={{ background: `url(http://lorempixel.com/20${this.randomInteger(0, 9)}/20${this.randomInteger(0, 9)})` }} >
                                <div className='image_label'>

                                </div>
                            </div>
                        </NavLink>
                        <NavLink to='/'>
                            <div className='image' style={{ background: `url(http://lorempixel.com/20${this.randomInteger(0, 9)}/20${this.randomInteger(0, 9)})` }} >
                                <div className='image_label'>

                                </div>
                            </div>
                        </NavLink>
                        <NavLink to='/'>
                            <div className='image' style={{ background: `url(http://lorempixel.com/20${this.randomInteger(0, 9)}/20${this.randomInteger(0, 9)})` }} >
                                <div className='image_label'>

                                </div>
                            </div>
                        </NavLink>
                    </div>
                </div>


                <div className='border' />


                <div className='container_right-text'>
                    <div className='image-container'>
                        <NavLink to='/'>
                            <div className='image' style={{ background: `url(../assets/img/site/info-stand-1.jpg)` }} >
                                <div className='image_label'>

                                </div>
                            </div>
                        </NavLink>
                        <NavLink to='/'>
                            <div className='image' style={{ background: `url(../assets/img/site/info-stand-2.jpg)` }} >
                                <div className='image_label'>

                                </div>
                            </div>
                        </NavLink>
                        <NavLink to='/'>
                            <div className='image' style={{ background: `url(../assets/img/site/info-stand-3.jpg)` }} >
                                <div className='image_label'>

                                </div>
                            </div>
                        </NavLink>
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


                <div className='border' />


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
                    <div className='image-container'>
                        <NavLink to='/'>
                            <div className='image' style={{ background: `url(../assets/img/site/nameplate-1.jpg)` }} >
                                <div className='image_label'>

                                </div>
                            </div>
                        </NavLink>
                        <NavLink to='/'>
                            <div className='image' style={{ background: `url(../assets/img/site/nameplate-2.jpg)` }} >
                                <div className='image_label'>

                                </div>
                            </div>
                        </NavLink>
                        <NavLink to='/'>
                            <div className='image' style={{ background: `url(../assets/img/site/nameplate-3.jpg)` }} >
                                <div className='image_label'>

                                </div>
                            </div>
                        </NavLink>
                        <NavLink to='/'>
                            <div className='image' style={{ background: `url(../assets/img/site/nameplate-4.jpg)` }} >
                                <div className='image_label'>

                                </div>
                            </div>
                        </NavLink>
                        <NavLink to='/'>
                            <div className='image' style={{ background: `url(../assets/img/site/nameplate-5.jpg)` }} >
                                <div className='image_label'>

                                </div>
                            </div>
                        </NavLink>
                        <NavLink to='/'>
                            <div className='image' style={{ background: `url(../assets/img/site/nameplate-6.jpg)` }} >
                                <div className='image_label'>

                                </div>
                            </div>
                        </NavLink>
                        <NavLink to='/'>
                            <div className='image' style={{ background: `url(../assets/img/site/nameplate-7.jpg)` }} >
                                <div className='image_label'>

                                </div>
                            </div>
                        </NavLink>
                    </div>
                </div>


                <div className='border' />


                <div className='container_right-text'>
                    <div className='image-container'>
                        <NavLink to='/'>
                            <div className='image' style={{ background: `url(../assets/img/site/sticker-1.jpg)` }} >
                                <div className='image_label'>

                                </div>
                            </div>
                        </NavLink>
                        <NavLink to='/'>
                            <div className='image' style={{ background: `url(../assets/img/site/sticker-2.jpg)` }} >
                                <div className='image_label'>

                                </div>
                            </div>
                        </NavLink>
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

