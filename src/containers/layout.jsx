import React from 'react';
import './layout.less';

export default class Layout extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
        <div className='layout'>
          <main>
            {this.props.children}
          </main>
        </div>
    )
  }
}