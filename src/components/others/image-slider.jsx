import React from 'react';
import './image-slider.less';

export default class ImageSlider extends React.Component {
    constructor(props) {
        super(props);

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
            settings: {}
        }
    }

    randomInteger(min, max) {
        let rand = min - 0.5 + Math.random() * (max - min + 1)
        rand = Math.round(rand);
        return rand;
    };

    slideImage(){
        return 
    }

    render() {
        const { images, settings } = this.state;

        const Slide = ({ image }) => {
            const styles = {
                backgroundImage: `url(${image})`,
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: '50% 60%'
            }
            return <div className="slide" style={styles}></div>
        }

        return (
            <div className='galary'>
                <h2>Наши работы</h2>
                <div>
                    {/* {setInterval(() => (
                        <img src={`${images[this.randomInteger(0,9)]}`} />
                    ),3000)} */}

                    {/* <img src={{setInterval(() => {
                        images[this.randomInteger(0,9)]
                    }, interval);}} /> */}

                    <Slide />
                </div>
            </div>
        );
    };
};