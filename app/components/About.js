import React from 'react';
import { Link } from 'react-router';
import ReactDOM from 'react-dom';
import SearchBar from './SearchBar';
import Photos from './Photos';

export default class About extends React.Component {
  render() {
    return (
      <div className="">
        rupesh.
      </div>
    );
  }
}

// export default class About extends React.Component{
// 	  constructor(){
// 		super();
// 		this.state = {
// 			photos: []
// 		};
// 		this.handleGetPhotos = this.handleGetPhotos.bind(this);
// 	}

// 	handleGetPhotos(photos){
// 		this.setState({'photos': photos});
// 	}

// 	render(){
// 		return(
// 				<div>
// 					<SearchBar _getPhotos={this.handleGetPhotos}/>
//         			<Photos data={this.state.photos}/>
// 				</div>
// 			)
// 	}
// };