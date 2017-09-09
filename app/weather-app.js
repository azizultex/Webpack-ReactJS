import React, { Component } from 'react';
import ReactDOM from 'react-dom';

const api_key = '9dcd8cbc7aaf9354f9517e04c2a9832a';

class App extends Component {

	constructor(props){
		super(props);
		this.state = {
			city: 'USA',
			description: ''
		}
	}

	componentDidMount(){
		this.fetchData(this.state.city);
	}

	fetchData(city){
		fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}`)
		.then( response => response.json())
		.then( json => {
			this.setState({
				description: json.weather[0].description
			})
		})
	}


	render(){
		return (
			<div> 
				<h2>React JS Weather App </h2>
				<h3> Weather forcast for {this.state.city}</h3>
				<h3>{this.state.description}</h3>
			</div>
		)
	}
}

ReactDOM.render( <App></App>, document.getElementById('root'));