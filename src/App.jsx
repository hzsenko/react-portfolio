import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Header from './components/__Layout/Header/Header';
import Main from './components/__Layout/Main/Main';
import Footer from './components/__Layout/Footer/Footer';
import About from './components/About/About';
import Home from './components/Home/Home';
import Contacts from './components/Contacts/Contacts';
import Portfolio from './components/__Layout/Portfolio/Portfolio';

function App() {
  return (
    <>
      <div className="app-content">
        <Header />
        <Main>
          <Switch>
            <Route path="/contacts">
              <Contacts />
            </Route>
            <Route path="/portfolio">
              <Portfolio />
            </Route>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </Main>
      </div>
      <Footer>footer</Footer>
    </>
  );
}

export default App;
