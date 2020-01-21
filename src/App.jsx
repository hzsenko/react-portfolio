import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Header from './components/__Layout/Header/Header';
import Main from './components/__Layout/Main/Main';
import Footer from './components/__Layout/Footer/Footer';
import About from './components/About/About';
import Home from './components/Home/Home';

function App() {
  return (
    <>
      <div className="app-content">
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
      </div>
      <Footer>footer</Footer>
    </>
  );
}

export default App;
