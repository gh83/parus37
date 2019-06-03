import React from 'react';
import Layout from "./containers/layout";
import Header from './containers/header';
import Main from './containers/main';
import Footer from './containers/footer';

export default class App extends React.Component{
  constructor(props){
    super(props);
  }

  render(){

    return(
        <Layout>
         <Header/>
         <Main/>
         <Footer/>
        </Layout>
    )
  }
}