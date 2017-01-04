import React from 'react';

class Sample extends React.Component{
	constructor(){
		super();
		this.state = { count :  0}
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
		
		return(
			<button onClick={this.increment}>{this.state.count}</button>
			)
	}
}


export default Sample;