import React from 'react';
import './arrow-begin.less';

export default class ArrowBegin extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            arrowShowed: false
        };

        this.buttonToggle = e => {
            const { arrowShowed } = this.state;
            if (window.pageYOffset > 300) {
                if (!arrowShowed) {
                    this.setState({ arrowShowed: true });
                }
            } else {
                if (arrowShowed) {
                    this.setState({ arrowShowed: false });
                }
            }
        }
    };

    componentDidMount() {
        window.addEventListener("scroll", this.buttonToggle);
    };

    componentWillUnmount() {
        window.removeEventListener("scroll", this.buttonToggle);
    };

    smoothScroll() {
        let i = window.pageYOffset;
        const delay = .0001;
        let timerScroll = setTimeout(function go() {
            if (i > 0) setTimeout(go, delay);
            i = i - 10;
            window.scrollTo(0, i);
        }, delay);
    };

    render() {
        const { arrowShowed } = this.state;
        return (
            <div id='arrow-begin' className='arrow-begin'
                style={{ display: arrowShowed ? 'flex' : 'none' }}
                onClick={this.smoothScroll}>
                <i className="fa fa-angle-up" aria-hidden="true" />
            </div>
        )
    }
}