import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Layout from "./containers/layout";
import Header from './containers/header';
import Main from './containers/main';
import Footer from './containers/footer';
import Home from './containers/home';
import NotFound from './containers/not-found';
import Letter from './coponents/letter';
import LightBox from './coponents/light-box';
import Panel from './coponents/panel';
import InfoStand from './coponents/info-stand';
import Table from './coponents/table';
import Sticker from './coponents/sticker';

export default class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {

    return (
      <Layout>
        <Header />
        <Main>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/letter' component={Letter}/>
            <Route exact path='/light-box' component={LightBox}/>
            <Route exact path='/panel' component={Panel}/>
            <Route exact path='/info-stand' component={InfoStand}/>
            <Route exact path='/table' component={Table}/>
            <Route exact path='/sticker' component={Sticker}/>
            <Route component={NotFound} />
          </Switch>
        </Main>
        <Footer />
      </Layout>
    )
  }
}