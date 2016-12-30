import React from 'react';
import { Link } from 'react-router';

export default class PortfolioPreview extends React.Component {
	render() {
		return (
				<Link to={`/Project/${this.props.id}`}>
					<div className="portfolio-preview">
						<img src={`${this.props.image}`} />
						<h2 className="name">{this.props.name}</h2>
					</div>
				</Link>
			)
	}
} 