import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Layout from "./containers/layout";
import Header from './containers/header';
import Main from './containers/main';
import Footer from './containers/footer';
import Home from './containers/home';

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
          </Switch>
        </Main>
        <Footer />
      </Layout>
    )
  }
}