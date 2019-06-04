import React from 'react';
import './home.less';

export default class Home extends React.Component {
    constructor(props) {
        super(props);
    }

    // randomInteger(min, max) {
    //     var rand = min - 0.5 + Math.random() * (max - min + 1)
    //     rand = Math.round(rand);
    //     return rand;
    //   }

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
                        <div><img src='http://lorempixel.com/250/200' /></div>
                        <div><img src='http://lorempixel.com/255/200' /></div>
                        <div><img src='http://lorempixel.com/252/200' /></div>
                        <div><img src='http://lorempixel.com/251/200' /></div>
                    </div>
                </div>

                <div className='container_right-text'>
                    <div className='image'>
                        <div><img src='http://lorempixel.com/250/200' /></div>
                        <div><img src='http://lorempixel.com/255/201' /></div>
                        <div><img src='http://lorempixel.com/252/202' /></div>
                        <div><img src='http://lorempixel.com/251/203' /></div>
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
                        <div><img src='http://lorempixel.com/250/207' /></div>
                        <div><img src='http://lorempixel.com/255/201' /></div>
                        <div><img src='http://lorempixel.com/252/209' /></div>
                        <div><img src='http://lorempixel.com/250/203' /></div>
                    </div>
                </div>

                <div className='container_right-text'>
                    <div className='image'>
                        <div><img src='http://lorempixel.com/250/203' /></div>
                        <div><img src='http://lorempixel.com/250/201' /></div>
                        <div><img src='http://lorempixel.com/258/205' /></div>
                        <div><img src='http://lorempixel.com/250/206' /></div>
                        <div><img src='http://lorempixel.com/250/203' /></div>
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
                        <div><img src='../assets/img/adress-table-1.jpg' /></div>
                        <div><img src='../assets/img/adress-table-2.jpg' /></div>
                        <div><img src='../assets/img/adress-table-3.jpg' /></div>
                        <div><img src='../assets/img/adress-table-4.jpg' /></div>
                    </div>
                </div>

                <div className='container_right-text'>
                    <div className='image'>
                        <div><img src='http://lorempixel.com/250/202' /></div>
                        <div><img src='http://lorempixel.com/253/201' /></div>
                        <div><img src='http://lorempixel.com/258/205' /></div>
                        <div><img src='http://lorempixel.com/251/203' /></div>
                    </div>
                    <div className='text'>
                        <h1>Наклейки</h1>
                        <br />
                        <p> очень важная информация про Наклейки</p>
                    </div>
                </div>
            </>
        )
    }
}