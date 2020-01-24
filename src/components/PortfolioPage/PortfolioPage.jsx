import React from 'react';
import { useParams } from 'react-router-dom';

function PortfoliPage() {
  const { id } = useParams();
  return (
    <div className="portfolio-page">
      { id }
    </div>
  );
}

export default PortfoliPage;
