import React from 'react';
import { NavLink } from 'react-router-dom';

import './home.less';
import Advantages from '../components/others/advantages';
import ImageSlider from '../components/others/image-slider';
import Partners from '../components/others/partners';
import { NameplatesImages, LettersImages, InfostandsImages, StickersImages, BannerImages } from '../data/image-slider';

export default class Home extends React.Component {
    constructor(props) {
        super(props);
    };

    randomInteger(min, max) {
        let rand = min - 0.5 + Math.random() * (max - min + 1)
        rand = Math.round(rand);
        return rand;
    };

    render() {
        return (
            <>
                <section className='banner' >
                    <ImageSlider images={BannerImages.images} height={'500px'} width={'100%'}
                        timer={5000} style={{ height: '100%', width: '100%', objectFit: 'cover' }} />
                </section>
                <section className='home-container'>
                    <div className='container_left-text'>
                        <div className='text'>
                            <NavLink to='/letter' data-balloon-length="medium" data-balloon="3d буквы. Размер от 15см до 12м. Материал пластик, стекло, вибраниум. Нажмите, чтобы выбрать" data-balloon-pos="bottom">
                                <h1>Объемные буквы</h1>
                            </NavLink>
                            <br />
                            <p>Представляют собой рекламную вывеску из отдельно стоящих букв, как с внутренней или наружной подсветкой, так и без подсветки. Это самый популярный вид наружной рекламы, т.к. привлекает внимание клиентов издалека, а также дает возможность замены одной из букв без демонтажа всей вывески.</p>
                            <NavLink to='/letter'>
                                <button className='global-button text_order-button'>заказать</button>
                            </NavLink>
                        </div>
                        <div className='image-container'>
                            <NavLink to='/letter' data-balloon-length="medium" data-balloon="3d буквы. Размер от 15см до 12м. Материал пластик, стекло, вибраниум. Нажмите, чтобы выбрать" data-balloon-pos="bottom">
                                <div className='image' style={{ background: `url(/assets/img/site/letter-1.jpg)` }} />
                            </NavLink>
                        </div>
                    </div>
                    <div className='border' />
                    <div className='container_right-text'>
                        <div className='image-container'>
                            <NavLink to='/light-box' data-balloon-length="medium" data-balloon="Световой короб. Размер от 15см до 12м. Материал пластик, стекло, вибраниум. Нажмите, чтобы выбрать" data-balloon-pos="up">
                                <div className='image' style={{ background: `url(http://lorempixel.com/20${this.randomInteger(0, 9)}/20${this.randomInteger(0, 9)})` }} />
                            </NavLink>
                        </div>
                        <div className='text'>
                            <NavLink to='/light-box' data-balloon-length="medium" data-balloon="Световой короб. Размер от 15см до 12м. Материал пластик, стекло, вибраниум. Нажмите, чтобы выбрать" data-balloon-pos="up">
                                <h1>Световые короба</h1>
                            </NavLink>
                            <br />
                            <p> Световой короб - вывеска прямоугольной или сложной формы с подсветкой изнутри. Является самым популярным вариантом в наружной рекламе.</p>
                            <NavLink to='/light-box'>
                                <button className='global-button text_order-button'>заказать</button>
                            </NavLink>
                        </div>
                    </div>
                    <div className='border' />
                    <div className='container_left-text'>
                        <div className='text'>
                            <NavLink to='/panel' data-balloon-length="medium" data-balloon="Панель кронштейн. Размер от 15см до 12м. Материал пластик, стекло, вибраниум. Нажмите, чтобы выбрать" data-balloon-pos="up">
                                <h1>Панель кронштейн</h1>
                            </NavLink>
                            <br />
                            <p>это односторонняя или двусторонняя конструкция, которая крепится к стенам домов и мачтам уличного освещения. Используется при размещении наружной рекламы. Данное изделие является разновидностью светового короба.</p>
                            <NavLink to='/panel'>
                                <button className='global-button text_order-button'>заказать</button>
                            </NavLink>
                        </div>
                        <div className='image-container'>
                            <NavLink to='/panel' data-balloon-length="medium" data-balloon="Панель кронштейн. Размер от 15см до 12м. Материал пластик, стекло, вибраниум. Нажмите, чтобы выбрать" data-balloon-pos="up">
                                <div className='image' style={{ background: `url(http://lorempixel.com/20${this.randomInteger(0, 9)}/20${this.randomInteger(0, 9)})` }} />
                            </NavLink>
                        </div>
                    </div>
                    <div className='border' />
                    <div className='container_right-text'>
                        <div className='image-container'>
                            <NavLink to='/info-stand' data-balloon-length="medium" data-balloon="Информационный стэнд. Размер от 15см до 12м. Материал пластик, стекло, вибраниум. Нажмите, чтобы выбрать" data-balloon-pos="up">
                                <div className='image' style={{ background: `url(/assets/img/site/info-stand-3.jpg)` }} />
                            </NavLink>
                        </div>
                        <div className='text'>
                            <NavLink to='/info-stand' data-balloon-length="medium" data-balloon="Информационный стэнд. Размер от 15см до 12м. Материал пластик, стекло, вибраниум. Нажмите, чтобы выбрать" data-balloon-pos="up">
                                <h1>Информационные стенды.</h1>
                            </NavLink>
                            <br />
                            <p> Это один из самых распространенных способов размещения информации. Стенды изготавливаются из ПВХ или композитного материала. Информация на стенде размещается в кармашках различного формата, которые могут быть изготовлены из оргстекла или ПЭТ. По желанию заказчика стенды могут обрамляться алюминиевой рамкой,позволяющей защитить их от механического воздействия.</p>
                            <NavLink to='/info-stand'>
                                <button className='global-button text_order-button'>заказать</button>
                            </NavLink>
                        </div>
                    </div>
                    <div className='border' />
                    <div className='container_left-text'>
                        <div className='text'>
                            <NavLink to='/table' data-balloon-length="medium" data-balloon="Табличка. Размер от 15см до 12м. Материал пластик, стекло, вибраниум. Нажмите, чтобы выбрать" data-balloon-pos="up">
                                <h1>Таблички.</h1>
                            </NavLink>
                            <br />
                            <p>Табличка – это рекламная конструкция, которая кроме названия и логотипа содержит ещё и информацию о предоставляемых услугах и товарах и графике работы. Табличка - отличное решение для недорогой, но заметной рекламы, потому что это первое, что видит клиент.</p>
                            <NavLink to='/table'>
                                <button className='global-button text_order-button'>заказать</button>
                            </NavLink>
                        </div>
                        <div className='image-container'>
                            <NavLink to='/table' data-balloon-length="medium" data-balloon="Табличка. Размер от 15см до 12м. Материал пластик, стекло, вибраниум. Нажмите, чтобы выбрать" data-balloon-pos="up">
                                <div className='image' style={{ background: `url(/assets/img/site/nameplate-3.jpg)` }} />
                            </NavLink>
                        </div>
                    </div>
                    <div className='border' />
                    <div className='container_right-text'>
                        <div className='image-container'>
                            <NavLink to='/sticker' data-balloon-length="medium" data-balloon="Наклейка. Размер от 15см до 12м. Материал пластик, стекло, вибраниум. Нажмите, чтобы выбрать" data-balloon-pos="up">
                                <div className='image' style={{ background: `url(/assets/img/site/sticker-1.jpg)` }} />
                            </NavLink>
                        </div>
                        <div className='text'>
                            <NavLink to='/sticker' data-balloon-length="medium" data-balloon="Наклейка. Размер от 15см до 12м. Материал пластик, стекло, вибраниум. Нажмите, чтобы выбрать" data-balloon-pos="up">
                                <h1>Наклейки</h1>
                            </NavLink>
                            <br />
                            <p></p>
                            <NavLink to='/sticker'>
                                <button className='global-button text_order-button'>заказать</button>
                            </NavLink>
                        </div>
                    </div>
                </section>
                <div className='border' />
                <Advantages />
                <div className='border' />
                <div className='our-works'>
                    <h2>Наши работы</h2>
                    <div className='sliders-container'>
                        <ImageSlider images={LettersImages.images} timer={3000} height={'200px'} width={'450px'} style={{ height: '100%', width: '100%', objectFit: 'none' }} />
                        <ImageSlider images={NameplatesImages.images} timer={3000} height={'200px'} width={'450px'} style={{ height: '100%', width: '100%', objectFit: 'none' }} />
                        <ImageSlider images={InfostandsImages.images} timer={3500} height={'200px'} width={'450px'} style={{ height: '100%', width: '100%', objectFit: 'none' }} />
                        <ImageSlider images={StickersImages.images} timer={4000} height={'200px'} width={'450px'} style={{ height: '100%', width: '100%', objectFit: 'none' }} />
                    </div>
                </div>
                <div className='border' />
                <Partners />
            </>
        );
    };
};

