import React, { Component } from 'react';
import twitterLogo from '../../twitter.svg';
import './style.css';
// import { Container } from './styles';

export default class Notfound extends Component {
	handleClick(){
	this.props.history.go(-1)
	}
	render() {
		return (
			<div className="container notFound">
				<img src={twitterLogo} alt="twitter-logo"/>
				<button onClick={this.handleClick.bind(this)}>Voltar</button>
			</div>
		)
	}
}
