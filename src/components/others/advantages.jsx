import React from 'react';
import './advantages.less';

export default props => (
    <div className='advantages'>
        <h2>Наши преимущества</h2>
        <div>
            <div>
                <i className="fa fa-handshake-o" aria-hidden="true" />
                <span>Гарантия 2 года</span>
            </div>
            <div>
                <i className="fa fa-truck" aria-hidden="true" />
                <span>Доставка по всей России</span>
            </div>
            <div>
                <i className="fa fa-rub" aria-hidden="true" />
                <span>Низкие цены</span>
            </div>
            <div>
                <i className="fa fa-clock-o" aria-hidden="true" />
                <span>Срок изготовления от 3-х дней</span>
            </div>
            <div>
                <i className="fa fa-trophy" aria-hidden="true" />
                <span>Большой опыт работы</span>
            </div>
        </div>
    </div>
);