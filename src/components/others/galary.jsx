import React from 'react';
import './galary.less';
import InfiniteCarousel from 'react-leaf-carousel';

export default class Galary extends React.Component {

    render() {
        const images = [
            "../assets/img/site/info-stand-1.jpg",
            "../assets/img/site/letter-1.jpg",
            "../assets/img/site/nameplate-5.jpg",
            "../assets/img/site/sticker-1.jpg",
            "../assets/img/site/info-stand-1.jpg",
            "../assets/img/site/info-stand-2.jpg",
            "../assets/img/site/info-stand-3.jpg",
            "../assets/img/site/nameplate-1.jpg",
            "../assets/img/site/nameplate-2.jpg",
            "../assets/img/site/nameplate-3.jpg",
        ];

        return (
            <div className='galary'>
                <h2>Наши работы</h2>
                <div>
                    <InfiniteCarousel
                        breakpoints={[
                            {
                                breakpoint: 500,
                                settings: {
                                    slidesToShow: 2,
                                    slidesToScroll: 2,
                                },
                            },
                            {
                                breakpoint: 768,
                                settings: {
                                    slidesToShow: 3,
                                    slidesToScroll: 3,
                                },
                            },
                        ]}
                        dots={true}
                        showSides={true}
                        sidesOpacity={.5}
                        sideSize={.1}
                        slidesToScroll={4}
                        slidesToShow={4}
                        scrollOnDevice={true}
                    >
                        {images.map((item, index) => (
                            <div key={index}>
                                <img alt='' src={item} />
                            </div>
                        ))}
                    </InfiniteCarousel>
                </div>
            </div>
        );
    };
};