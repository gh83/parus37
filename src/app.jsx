import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Header from './containers/header';
import Main from './containers/main';
import Footer from './containers/footer';
import Home from './containers/home';
import NotFound from './components/others/not-found';
import Letter from './components/pages/letter';
import LightBox from './components/pages/light-box';
import Panel from './components/pages/panel';
import InfoStand from './components/pages/info-stand';
import Table from './components/pages/table';
import Sticker from './components/pages/sticker';
import Contacts from './components/pages/contacts';
import Price from './components/pages/price';
import Matching from './components/pages/matching';

export default class App extends React.Component {
  constructor(props) {
    super(props);
  };

  render() {
    return (
      <>
        <Header />
        <Main>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/letter' component={Letter} />
            <Route exact path='/light-box' component={LightBox} />
            <Route exact path='/panel' component={Panel} />
            <Route exact path='/info-stand' component={InfoStand} />
            <Route exact path='/table' component={Table} />
            <Route exact path='/sticker' component={Sticker} />
            <Route exact path='/contacts' component={Contacts} />
            <Route exact path='/price' component={Price} />
            <Route exact path='/matching' component={Matching} />
            <Route component={NotFound} />
          </Switch>
        </Main>
        <Footer />
      </>
    );
  };
};