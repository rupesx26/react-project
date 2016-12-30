'use strict';

import React from 'react';
import { Link } from 'react-router';
import NotFoundPage from './NotFoundPage';
//import AthletesMenu from './AthletesMenu';
//import Medal from './Medal';
//import Flag from './Flag';
import projects from '../data/Projects';



export default class PortfolioPage extends React.Component {
  render() {
    const id = this.props.params.id;
    const project = projects.filter((project) => project.id === id)[0];
    if (!project) {
      return <NotFoundPage/>;
    }
    //const headerStyle = { backgroundImage: `url(/img/${athlete.cover})` };
    return (
      <div className="portfolio-full">
        <div className="portfolio">
          <div className="picture-container">
            <img src={`${project.image}`}/>
            <h2 className="name">{project.name}</h2>
            <p className="description">{project.description}</p>
          </div>
        </div>
        <div className="navigateBack">
          <Link to="/portfolio">« Back to the index</Link>
        </div>
      </div>
    );
  }
}