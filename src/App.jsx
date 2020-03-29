import React, { lazy, Suspense } from 'react';
import { Switch, Route } from 'react-router-dom';

import Header from './components/__Layout/Header';
import Main from './components/__Layout/Main';
import Footer from './components/__Layout/Footer';
import Spinner from './components/__Partials/Spinner';

const Home = lazy(() => import('./components/Home'));
const About = lazy(() => import('./components/About'));
const Contacts = lazy(() => import('./components/Contacts'));
const Portfolio = lazy(() => import('./components/Portfolio'));


function App() {
  return (
    <>
      <div className="app-content">
        <Header />
        <Main>
          <Suspense fallback={<Spinner />}>
            <Switch>
              <Route path="/contacts"><Contacts /></Route>
              <Route path="/portfolio"><Portfolio /></Route>
              <Route path="/about"><About /></Route>
              <Route path='/'><Home /></Route>
            </Switch>
          </Suspense>
        </Main>
      </div>
      <Footer />
    </>
  );
}

export default React.memo(App);
