import React from 'react';
// import {
//   Switch,
//   Route,
//   useRouteMatch,
// } from 'react-router-dom';

import Title from '../__Partials/Title/Title';
import Intro from '../__Partials/Intro/Intro';
// import PortfoliPage from '../../PortfolioPage/PortfolioPage';
import PortfolioItem from './PortfolioItem';

import './Portfolio.scss';

function Portfolio() {
  // const { path } = useRouteMatch();

  return (
    <div className="app-portfolio">
      <Title className="portfolio-title">Мои работы</Title>
      <Intro>
        <p>На этой странице Вы можете познакомиться с моими работами
          и увидеть мой стиль разработки
        </p>
      </Intro>
      <div className="portfolio-items">
        <PortfolioItem />
        <PortfolioItem />
        <PortfolioItem />
        <PortfolioItem />
      </div>

      {/* <Switch>
        <Route exact path={path}>
          portfolio page content
        </Route>
        <Route path={`${path}/:id`}>
          <PortfoliPage />
        </Route>
      </Switch> */}
    </div>
  );
}

export default React.memo(Portfolio);
