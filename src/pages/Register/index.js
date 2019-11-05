import React, { Component} from 'react';

// import { Container } from './styles';
import twitterlogo from '../../twitter.svg';
import api from '../../services/api';
import './style.css'

const validateEmail = (email) => {
	let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	return re.test(String(email).toLowerCase());
}

export default class Register extends Component {
	state = {
		error: ''
	}

	
	handleSubmit = async e => {
		e.preventDefault();
		const formData = new FormData(e.target);
		const data = Object.fromEntries(formData)
		const { username, password, email, password2 } = data
		
		if(!username || !password || !email || !password2) return this.setState({error: "Preencha todos os campos"})
		if(!validateEmail(email)) return this.setState({error: 'E-mail em formato invalido' })
		if(password !== password2) return this.setState({error: "Senhas não batem"})
		if(password.length < 8) return this.setState({error: "Senha menor do que 8 caracteres"})
	
		
		try {
			const response = await api.post('users/register', {
				username, email, password, password2 })
				if(response.status === 200) this.props.history.push('/')
		} catch (error) {
			
			this.setState({error: error.response.data.error})
		}
	};
	
	render() {
		return (
			<div className="login-wrapper">
				 {this.state.error ? <div className="alert alert-danger" role="alert">{this.state.error}</div> : null }

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
