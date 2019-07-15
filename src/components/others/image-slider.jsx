import React from 'react';
import './image-slider.less';

export default class ImageSlider extends React.Component {
    constructor(props) {
        super(props);

        this.timerID = undefined;

        this.state = {
            currentImageNumber: 0
        }
    };

    componentDidMount() {
        this.timerID = setInterval(() => {
            const { currentImageNumber } = this.state;
            const { images } = this.props;
            let newNumber = currentImageNumber + 1;
            newNumber = (newNumber < images.length) ? newNumber : 0
            this.setState({ currentImageNumber: newNumber });
        }, this.props.timer);
    };

    componentWillUnmount() {
        clearInterval(this.timerID);
    };

    changeImageButton(index) {
        clearInterval(this.timerID);
        const { images } = this.props;
        const { currentImageNumber } = this.state;
        let newNumber = currentImageNumber + index;
        if (newNumber > images.length - 1) { newNumber = 0 };
        if (newNumber < 0) { newNumber = images.length - 1 };
        this.setState({ currentImageNumber: newNumber });
    };

    slideImage(currentImageNumber) {
        clearInterval(this.timerID);
        this.setState({ currentImageNumber });
    };

    render() {
        const { currentImageNumber } = this.state;
        const { images, height, width, style } = this.props;
        return (
            <div className='galary' style={{ width: width }}>
                <div className="slider" style={{ height: height }}>
                    <div className='imgs'>
                        <div className='prev-img' onClick={() => this.changeImageButton(-1)} >
                            <i className="fa fa-angle-left" aria-hidden="true" />
                        </div>
                        <div className='next-img' onClick={() => this.changeImageButton(1)} >
                            <i className="fa fa-angle-right" aria-hidden="true" />
                        </div>
                        {images.map((item, key) => (
                            <div key={key} className={`img ${(currentImageNumber === key) ? 'active' : ''}`}>
                                <img alt={`slide-${key}`} style={style} src={item} />
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