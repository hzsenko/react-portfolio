import React from 'react';
import {
  Switch,
  Route,
  Link,
  useRouteMatch,
} from 'react-router-dom';

import Emoji from '../../__Partials/Emoji/Emoji';
import Title from '../../__Partials/Title/Title';
import PortfoliPage from '../../PortfolioPage/PortfolioPage';

function Portfolio() {
  const { path, url } = useRouteMatch();

  return (
    <div className="app-portfolio">
      <Title className="portfolio-title">
        Мои работы
        <Emoji symbol="💪" className="big --strength" />
        <ul>
          <li>
            <Link to={`${url}/1`}>item-1</Link>
          </li>
          <li>
            <Link to={`${url}/2`}>item-2</Link>
          </li>
          <li>
            <Link to={`${url}/3`}>item-3</Link>
          </li>
        </ul>
      </Title>

      <Switch>
        <Route exact path={path}>
          portfolio page content
        </Route>
        <Route path={`${path}/:id`}>
          <PortfoliPage />
        </Route>
      </Switch>
    </div>
  );
}

export default Portfolio;
