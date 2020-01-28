import React from 'react';

function PortfolioItem() {
  return (
    <div className="portfolio-item">
      <div className="portfolio-item__wrapper">
        <div className="portfolio-item__img">
          <img src="https://cdn.technologynetworks.com/tn/images/thumbs/jpeg/640_360/twenty-minutes-in-nature-is-enough-to-cut-stress-hormone-levels-317872.jpg" alt="" />
        </div>
        <div className="portfolio-item__title">
          Project #1
        </div>
        <div className="portfolio-item__num">1</div>
      </div>
    </div>
  );
}

export default React.memo(PortfolioItem);
