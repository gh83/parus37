import React from 'react';
import ReactDom from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import './styles/index.less';
import ArrowBegin from './coponents/ui/arrow-begin';

import App from './app';

ReactDom.render((
    <>
    <BrowserRouter>
      <App/>
    </BrowserRouter>
    <ArrowBegin/>
    </>
), document.getElementById('root'));