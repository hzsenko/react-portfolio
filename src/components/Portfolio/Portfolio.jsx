import React from 'react';
// import {
//   Switch,
//   Route,
//   useRouteMatch,
// } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBatteryThreeQuarters } from '@fortawesome/free-solid-svg-icons';
import Title from '../__Partials/Title';
import Intro from '../__Partials/Intro';

// import PortfoliPage from '../../PortfolioPage/PortfolioPage';
import PortfolioItem from './PortfolioItem';

import './Portfolio.scss';

function Portfolio() {
  // const { path } = useRouteMatch();
  const dev = true;

  const portfolioEmpty = (
    <div className="empty">
      <div className="empty-icon">
        <FontAwesomeIcon icon={faBatteryThreeQuarters} />
      </div>
      <p className="empty-text">Раздел находится в разработке</p>
    </div>
  );

  const portfolioContent = (
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

  return dev ? portfolioEmpty : portfolioContent;
}

export default React.memo(Portfolio);
