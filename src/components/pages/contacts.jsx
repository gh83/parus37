import React from 'react';
import './contacts.less';
import { Map, Marker, MarkerLayout } from 'yandex-map-react';

const points = [
    [57.012423, 40.947878]
];
const center = [57.012423, 40.947878];
const markerStyles = {
    width: '40px',
    height: '40px',
    overflow: 'hidden',
    border: '1px solid orange',
    background: '#FFF',
    borderRadius: '50%'
};
const mapState = {
    controls: ['default']
};

const Contacts = props => (
    <div className='contacts-page'>
        <div>
            <h1>Контакты</h1>
            <div className='contacts-page_adress-contacts'>
                <a href='tel:+79051560923'>
                    <i className="fa fa-phone" aria-hidden="true" />
                    <span>+7 905 156 0923</span>
                </a>
                <a href='mailto:parus37@inbox.ru'>
                    <i className="fa fa-envelope-o" aria-hidden="true" />
                    <span>parus37@inbox.ru</span>
                </a>
                <div>
                    <i className="fa fa-map-marker" aria-hidden="true" />
                    <span>Адрес офиса: 153032, Россия, Иваново ул. Поляковой 8б</span>
                </div>
            </div>
            <div className='contacts-page_time'>
                <i className="fa fa-clock-o" aria-hidden="true" />
                <div>
                    <span>Будни: с 8-00 до 18-00</span>
                    <span>Суббота: с 9-00 до 17-00</span>
                    <span>Воскресенье: с 9-00 до 15-00</span>
                </div>
            </div>
        </div>

        <div className='yandex_map'>
            <Map width='100%' state={mapState} center={center} zoom={16}>
                {points.map(([lat, lon], i) => (
                    <Marker key={'marker_' + i} lat={lat} lon={lon}>
                        <MarkerLayout>
                            <div style={markerStyles}>
                                <img style={{ width: '30px', height: '30px' }} src="../assets/img/logo_without_words.png" />
                            </div>
                        </MarkerLayout>
                    </Marker>
                ))}
            </Map>
        </div>
    </div>
);

export default Contacts;
