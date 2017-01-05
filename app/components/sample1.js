import React from 'react';
import Header from './Header';

class Sample extends React.Component{
	constructor(){
		super();
		this.state = { count :  0, name: "Rupeshg", title: "Welcome NY"}
		//this.state = { }
		this.increment = this.increment.bind(this);
	}

	increment(){
		this.setState ({ count: this.state.count + 1 });
	}

	
	getDefaultProps(){
		console.log("getting our default properties");
	}
	getinitialState(){
		console.log("getting our intial state properties");
		return({
			count: 0
		})
	}

	

	render(){
		// setTimeout(() =>{
		// 	this.setState({ name: "Bob"});
		// }, 1000);

		 // setTimeout(() =>{
		 // 	this.setState({ title: "Welcome Roy"});
		 // }, 5000);

		//const title = "Welcome Will!";

		return(
			<div>
			<Header name={"header"} href={"google.in"} rel={"/back"} title={this.state.title} />
			<h2 getDefaultProps={this.getDefaultProps.bind(this)}>{this.state.name}</h2>
			<button onClick={this.increment}>{this.state.count}</button>
			</div>
			)
	}
}


export default Sample;