import React from 'react';
import './arrow-begin.less';

export default class ArrowBegin extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            arrowShowed: false
        };
    };

    componentDidMount() {
        this.arrowEl = document.getElementById('arrow-begin');
        window.addEventListener("scroll", e => {
            const { arrowShowed } = this.state;
            if (e.pageY > 300) {
                if (!arrowShowed) {
                    this.setState({ arrowShowed: true });
                }
            } else {
                if (arrowShowed) {
                    this.setState({ arrowShowed: false });
                }
            }
        });
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