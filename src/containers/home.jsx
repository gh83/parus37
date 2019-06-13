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
                        <p>Представляют собой рекламную вывеску из отдельно стоящих букв, как с внутренней или наружной подсветкой, так и без подсветки. Это самый популярный вид наружной рекламы, т.к. привлекает внимание клиентов издалека, а также дает возможность замены одной из букв без демонтажа всей вывески.</p>
                    </div>
                    <div className='image-container'>
                        <NavLink to='/letter'>
                            <div
                                className='image'
                                style={{ background: `url(../assets/img/site/letter-1.jpg)` }}
                                data-balloon-length="medium"
                                data-balloon="3d буквы. Размер от 15см до 12м. Материал пластик, стекло, вибраниум. Нажмите, чтобы выбрать"
                                data-balloon-pos="up"
                            >
                                <div className='image_label'>
                                    <div>3D буквы</div>
                                </div>
                            </div>
                        </NavLink>
                    </div>
                </div>


                <div className='border' />


                <div className='container_right-text'>
                    <div className='image-container'>
                        <NavLink to='/'>
                            <div
                                className='image'
                                style={{ background: `url(http://lorempixel.com/20${this.randomInteger(0, 9)}/20${this.randomInteger(0, 9)})` }}
                                data-balloon-length="medium"
                                data-balloon="Световой короб. Размер от 15см до 12м. Материал пластик, стекло, вибраниум. Нажмите, чтобы выбрать"
                                data-balloon-pos="up"
                            >
                                <div className='image_label'>
                                    <div>световой короб 1</div>
                                </div>
                            </div>
                        </NavLink>
                        <NavLink to='/'>
                            <div
                                className='image'
                                style={{ background: `url(http://lorempixel.com/20${this.randomInteger(0, 9)}/20${this.randomInteger(0, 9)})` }}
                                data-balloon-length="medium"
                                data-balloon="Световой короб. Размер от 15см до 12м. Материал пластик, стекло, вибраниум. Нажмите, чтобы выбрать"
                                data-balloon-pos="up"
                            >
                                <div className='image_label'>
                                    <div>световой короб 2</div>
                                </div>
                            </div>
                        </NavLink>
                        <NavLink to='/'>
                            <div
                                className='image'
                                style={{ background: `url(http://lorempixel.com/20${this.randomInteger(0, 9)}/20${this.randomInteger(0, 9)})` }}
                                data-balloon-length="medium"
                                data-balloon="Световой короб. Размер от 15см до 12м. Материал пластик, стекло, вибраниум. Нажмите, чтобы выбрать"
                                data-balloon-pos="up"
                            >
                                <div className='image_label'>
                                    <div>световой короб 3</div>
                                </div>
                            </div>
                        </NavLink>
                        <NavLink to='/'>
                            <div
                                className='image'
                                style={{ background: `url(http://lorempixel.com/20${this.randomInteger(0, 9)}/20${this.randomInteger(0, 9)})` }}
                                data-balloon-length="medium"
                                data-balloon="Световой короб. Размер от 15см до 12м. Материал пластик, стекло, вибраниум. Нажмите, чтобы выбрать"
                                data-balloon-pos="up"
                            >
                                <div className='image_label'>
                                    <div>световой короб 4</div>
                                </div>
                            </div>
                        </NavLink>
                    </div>
                    <div className='text'>
                        <h1>Световые короба</h1>
                        <br />
                        <p> Световой короб - вывеска прямоугольной или сложной формы с подсветкой изнутри. Является самым популярным вариантом в наружной рекламе.</p>
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
                            <div
                                className='image'
                                style={{ background: `url(http://lorempixel.com/20${this.randomInteger(0, 9)}/20${this.randomInteger(0, 9)})` }}
                                data-balloon-length="medium"
                                data-balloon="Панель кронштейн. Размер от 15см до 12м. Материал пластик, стекло, вибраниум. Нажмите, чтобы выбрать"
                                data-balloon-pos="up"
                            >
                                <div className='image_label'>
                                    <div>панель кронштейн 1</div>
                                </div>
                            </div>
                        </NavLink>
                        <NavLink to='/'>
                            <div
                                className='image'
                                style={{ background: `url(http://lorempixel.com/20${this.randomInteger(0, 9)}/20${this.randomInteger(0, 9)})` }}
                                data-balloon-length="medium"
                                data-balloon="Панель кронштейн. Размер от 15см до 12м. Материал пластик, стекло, вибраниум. Нажмите, чтобы выбрать"
                                data-balloon-pos="up"
                            >
                                <div className='image_label'>
                                    <div>панель кронштейн 2</div>
                                </div>
                            </div>
                        </NavLink>
                        <NavLink to='/'>
                            <div
                                className='image'
                                style={{ background: `url(http://lorempixel.com/20${this.randomInteger(0, 9)}/20${this.randomInteger(0, 9)})` }}
                                data-balloon-length="medium"
                                data-balloon="Панель кронштейн. Размер от 15см до 12м. Материал пластик, стекло, вибраниум. Нажмите, чтобы выбрать"
                                data-balloon-pos="up"
                            >
                                <div className='image_label'>
                                    <div>панель кронштейн 3</div>
                                </div>
                            </div>
                        </NavLink>
                        <NavLink to='/'>
                            <div
                                className='image'
                                style={{ background: `url(http://lorempixel.com/20${this.randomInteger(0, 9)}/20${this.randomInteger(0, 9)})` }}
                                data-balloon-length="medium"
                                data-balloon="Панель кронштейн. Размер от 15см до 12м. Материал пластик, стекло, вибраниум. Нажмите, чтобы выбрать"
                                data-balloon-pos="up"
                            >
                                <div className='image_label'>
                                    <div>панель кронштейн 4</div>
                                </div>
                            </div>
                        </NavLink>
                    </div>
                </div>


                <div className='border' />


                <div className='container_right-text'>
                    <div className='image-container'>
                        <NavLink to='/'>
                            <div
                                className='image'
                                style={{ background: `url(../assets/img/site/info-stand-1.jpg)` }}
                                data-balloon-length="medium"
                                data-balloon="Информационный стэнд. Размер от 15см до 12м. Материал пластик, стекло, вибраниум. Нажмите, чтобы выбрать"
                                data-balloon-pos="up"
                            >
                                <div className='image_label'>
                                    <div>информационный стенд 1</div>
                                </div>
                            </div>
                        </NavLink>
                        <NavLink to='/'>
                            <div
                                className='image'
                                style={{ background: `url(../assets/img/site/info-stand-1.jpg)` }}
                                data-balloon-length="medium"
                                data-balloon="Информационный стэнд. Размер от 15см до 12м. Материал пластик, стекло, вибраниум. Нажмите, чтобы выбрать"
                                data-balloon-pos="up"
                            >
                                <div className='image_label'>
                                    <div>информационный стенд 2</div>
                                </div>
                            </div>
                        </NavLink>
                        <NavLink to='/'>
                            <div
                                className='image'
                                style={{ background: `url(../assets/img/site/info-stand-1.jpg)` }}
                                data-balloon-length="medium"
                                data-balloon="Информационный стэнд. Размер от 15см до 12м. Материал пластик, стекло, вибраниум. Нажмите, чтобы выбрать"
                                data-balloon-pos="up"
                            >
                                <div className='image_label'>
                                    <div>информационный стенд 3</div>
                                </div>
                            </div>
                        </NavLink>
                    </div>
                    <div className='text'>
                        <h1>Информационные стенды.</h1>
                        <br />
                        <p> Это один из самых распространенных способов размещения информации. Стенды изготавливаются из ПВХ или композитного материала. Информация на стенде размещается в кармашках различного формата, которые могут быть изготовлены из оргстекла или ПЭТ. По желанию заказчика стенды могут обрамляться алюминиевой рамкой,позволяющей защитить их от механического воздействия.</p>
                    </div>
                </div>


                <div className='border' />


                <div className='container_left-text'>
                    <div className='text'>
                        <h1>Таблички.</h1>
                        <br />
                        <p>Табличка – это рекламная конструкция, которая кроме названия и логотипа содержит ещё и информацию о предоставляемых услугах и товарах и графике работы. Табличка - отличное решение для недорогой, но заметной рекламы, потому что это первое, что видит клиент.</p>
                    </div>
                    <div className='image-container'>
                        <NavLink to='/'>
                            <div
                                className='image'
                                style={{ background: `url(../assets/img/site/nameplate-1.jpg)` }}
                                data-balloon-length="medium"
                                data-balloon="Табличка. Размер от 15см до 12м. Материал пластик, стекло, вибраниум. Нажмите, чтобы выбрать"
                                data-balloon-pos="up"
                            >
                                <div className='image_label'>
                                    <div>табличка 1</div>
                                </div>
                            </div>
                        </NavLink>
                        <NavLink to='/'>
                            <div
                                className='image'
                                style={{ background: `url(../assets/img/site/nameplate-2.jpg)` }}
                                data-balloon-length="medium"
                                data-balloon="Табличка. Размер от 15см до 12м. Материал пластик, стекло, вибраниум. Нажмите, чтобы выбрать"
                                data-balloon-pos="up"
                            >
                                <div className='image_label'>
                                    <div>табличка 2</div>
                                </div>
                            </div>
                        </NavLink>
                        <NavLink to='/'>
                            <div
                                className='image'
                                style={{ background: `url(../assets/img/site/nameplate-3.jpg)` }}
                                data-balloon-length="medium"
                                data-balloon="Табличка. Размер от 15см до 12м. Материал пластик, стекло, вибраниум. Нажмите, чтобы выбрать"
                                data-balloon-pos="up"
                            >
                                <div className='image_label'>
                                    <div>табличка 3</div>
                                </div>
                            </div>
                        </NavLink>
                        <NavLink to='/'>
                            <div
                                className='image'
                                style={{ background: `url(../assets/img/site/nameplate-4.jpg)` }}
                                data-balloon-length="medium"
                                data-balloon="Табличка. Размер от 15см до 12м. Материал пластик, стекло, вибраниум. Нажмите, чтобы выбрать"
                                data-balloon-pos="up"
                            >
                                <div className='image_label'>
                                    <div>табличка 4</div>
                                </div>
                            </div>
                        </NavLink>
                        <NavLink to='/'>
                            <div
                                className='image'
                                style={{ background: `url(../assets/img/site/nameplate-5.jpg)` }}
                                data-balloon-length="medium"
                                data-balloon="Табличка. Размер от 15см до 12м. Материал пластик, стекло, вибраниум. Нажмите, чтобы выбрать"
                                data-balloon-pos="up"
                            >
                                <div className='image_label'>
                                    <div>табличка 5</div>
                                </div>
                            </div>
                        </NavLink>
                        <NavLink to='/'>
                            <div
                                className='image'
                                style={{ background: `url(../assets/img/site/nameplate-6.jpg)` }}
                                data-balloon-length="medium"
                                data-balloon="Табличка. Размер от 15см до 12м. Материал пластик, стекло, вибраниум. Нажмите, чтобы выбрать"
                                data-balloon-pos="up"
                            >
                                <div className='image_label'>
                                    <div>табличка 6</div>
                                </div>
                            </div>
                        </NavLink>
                        <NavLink to='/'>
                            <div
                                className='image'
                                style={{ background: `url(../assets/img/site/nameplate-7.jpg)` }}
                                data-balloon-length="medium"
                                data-balloon="Табличка. Размер от 15см до 12м. Материал пластик, стекло, вибраниум. Нажмите, чтобы выбрать"
                                data-balloon-pos="up"
                            >
                                <div className='image_label'>
                                    <div>табличка 7</div>
                                </div>
                            </div>
                        </NavLink>
                    </div>
                </div>


                <div className='border' />


                <div className='container_right-text'>
                    <div className='image-container'>
                        <NavLink to='/'>
                            <div
                                className='image'
                                style={{ background: `url(../assets/img/site/sticker-1.jpg)` }}
                                data-balloon-length="medium"
                                data-balloon="Наклейка. Размер от 15см до 12м. Материал пластик, стекло, вибраниум. Нажмите, чтобы выбрать"
                                data-balloon-pos="up"
                            >
                                <div className='image_label'>
                                    <div>наклейка 1</div>
                                </div>
                            </div>
                        </NavLink>
                        <NavLink to='/'>
                            <div
                                className='image'
                                style={{ background: `url(../assets/img/site/sticker-2.jpg)` }}
                                data-balloon-length="medium"
                                data-balloon="Наклейка. Размер от 15см до 12м. Материал пластик, стекло, вибраниум. Нажмите, чтобы выбрать"
                                data-balloon-pos="up"
                            >
                                <div className='image_label'>
                                    <div>наклейка 2</div>
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

