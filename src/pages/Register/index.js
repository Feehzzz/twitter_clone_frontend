import React, { Component } from 'react';

// import { Container } from './styles';
import twitterlogo from '../../twitter.svg';
import api from '../../services/api';
import './style.css'

export default class Register extends Component {
	
	handleSubmit = async e => {
		e.preventDefault();
		const formData = new FormData(e.target);
		const data = Object.fromEntries(formData)
		const {username, password, email, password2} = data
		
		api.post('users/register', {
			username, email, password, password2
		}).then(res => {
			console.log(res)
		}).catch(err => console.log(err))
		
	};
	


	render() {
		return (
			<div className="login-wrapper">
				<img src={twitterlogo} alt="twitter_clone-logo" />
				<form onSubmit={this.handleSubmit}>
					<input type="text" name="username"
						placeholder="Nome de usuário" />
					<input type="text" name="email"
						placeholder="E-mail" />
					<input type="password" name="password"
						placeholder="Senha" />
					<input type="password" name="password2"
						placeholder="Confirme a senha" />
					<button type="submit">Registrar</button>
				</form>

			</div>
		);
	}
}
