import React from 'react';

class SearchBar extends React.Component{
	handleSubmit(e){
		e.preventDefault();
		let apikey = 'fda49c8cb3942dab1d64780f08ed71fe';
		let searchKeyword = this.refs.photoKeyword.value;
		this.refs.photoKeyword.value = '';
		let url = `https://api.flickr.com/services/rest/?api_key=${apiKey}&method=flickr.photos.search&format=json&nojsoncallback=1&&per_page=50&page=1&text=${searchKeyword}`;

		fetch(url)
		.then(response => response.json())
		.then(data=>{
			this.props._getPhotos(data.photos.photo);
		})
		.catch(error =>{
			throw error;
		})
	}

	render(){
		return(
				<div className="">
					<h2 className="title">React Flickr </h2>	
					<form onSubmit={this.handleSubmit.bind(this)}>
						<input type="text" className="searchInput" placeholder="Search keyword.." ref="photoKeyword" required autofocus />
						<button type="submit" ref="button" className="searchButton"> Search on Flickr</button>
					</form>
				</div>
			)
	}
};

export default SearchBar;