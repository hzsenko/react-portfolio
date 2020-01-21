import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Layout from './components/__Layout/Layout/Layout';
import Header from './components/__Layout/Header/Header';
import Main from './components/__Layout/Main/Main';
import Footer from './components/__Layout/Footer/Footer';

import './test.scss';
import About from './components/About/About';
import Home from './components/Home/Home';

function App() {
  return (
    <Layout>
      <Header />
      <Main>
        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Main>
      <Footer>footer</Footer>
    </Layout>
  );
}

export default App;
