import React from 'react';

import Layout from './components/__Layout/Layout/Layout';
import Header from './components/__Layout/Header/Header';
import Main from './components/__Layout/Main/Main';
import Footer from './components/__Layout/Footer/Footer';

import './test.scss';

function App() {
  return (
    <Layout>
      <Header>1</Header>
      <Main>2</Main>
      <Footer>3</Footer>
    </Layout>
  );
}

export default App;
