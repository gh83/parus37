import React from 'react';
import './image-slider.less';

export default class ImageSlider extends React.Component {
    constructor(props) {
        super(props);

        this.timerID = undefined;

        this.state = {
            images: [
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
            ],
            currentImageNumber: 0
        }
    };

    componentDidMount() {
        this.timerID = setInterval(() => {
            const { currentImageNumber, images } = this.state;
            let newNumber = currentImageNumber + 1;
            newNumber = (newNumber < images.length) ? newNumber : 0
            this.setState({ currentImageNumber: newNumber });
        }, 3000);
    };

    slideImage(currentImageNumber) {
        clearInterval(this.timerID);
        this.setState({ currentImageNumber });
    };

    render() {
        const { images, settings, currentImageNumber } = this.state;
        return (
            <div className='galary'>
                <h2>Наши работы</h2>
                <div className="slider">
                    <div className='imgs'>
                        {images.map((item, key) => (
                            <div key={key} className={`img ${(currentImageNumber === key) ? 'active' : ''}`}>
                                <img alt={`slide-${key}`} src={item} />
                            </div>
                        ))}
                    </div>
                    <div className="buttons">
                        {images.map((item, key) => (
                            <div key={key} className={`button ${(currentImageNumber === key) ? 'active' : ''}`} onClick={e => this.slideImage(key)} />
                        ))}
                    </div>
                </div>
            </div>
        );
    };
};