import React from 'react';
import PortfolioPreview from './PortfolioPreview';
import projects from '../data/Projects';


export default class Portfolio extends React.Component {
  render() {
    return (
      <div className="Portfolio">
      	{projects.map(projectsData => <PortfolioPreview key={projectsData.id} {...projectsData} />)}
      </div>
    );
  }
}