import React from 'react';
import './contacts.less';
import { Map, Marker, MarkerLayout } from 'yandex-map-react';

const points = [
    [56.967291, 40.959661],
];
const center = [56.967291, 40.959661];
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

export default class Contacts extends React.Component {
    constructor(props) {
        super(props);
    };

    render() {
        return (
            <div className='contacts-page'>
                <div>
                    <h1>Контакты</h1>
                    <a href='tel:+79051560923'>
                        <i className="fa fa-phone" aria-hidden="true" />
                        <span>+7 905 156 0923</span>
                    </a>
                    <a href='mailto:parus37@inbox.ru'>
                        <i className="fa fa-envelope-o" aria-hidden="true" />
                        <span>parus37@inbox.ru</span>
                    </a>
                    <span>Адрес офиса: 109156, Россия, Иваново ул. Станкостроителей 10</span>
                    <span>Время работы: с 9-00 до 19-00</span>
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
        )
    }
}