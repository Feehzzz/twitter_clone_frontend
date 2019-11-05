import React, { Component } from 'react';
import api from '../../services/api'
import twitterlogo from '../../twitter.svg';
import './style.css';

// import { Container } from './styles';

export default class Login extends Component {
    state = {
        error: ''
    };

    handleSubmit = async e => {
        e.preventDefault();

        const formData = new FormData(e.target);
		const data = Object.fromEntries(formData)
        const { password, email } = data
        if(!email || !password) return this.setState({error: "Preencha todos os campos"})
        
        
        try {
            const res = await api.post('users/auth', {
                email, 
                password
            })
            if(res.status === 200) {
                localStorage.setItem('token', JSON.stringify(res.data.token));
                localStorage.setItem('twitter:username', res.data.user.username);
                this.props.history.push('/timeline')
            }
            
        } catch (error) {
            this.setState({
                error: error.response.data.error
            })
            
        }
 
    };

  render() {
    return (
        <div className="login-wrapper">
            {this.state.error ? <div className="alert alert-danger" role="alert">{this.state.error}</div> : null }
            <img src={twitterlogo} alt="twitter_clone-logo" />
            <form onSubmit={this.handleSubmit}>
                <input 
                name="email"
                placeholder="E-mail"/>
                <input type="password"
                name="password"
                placeholder="Senha"/>
                <button type="submit">Entrar</button>
            </form>
            <div className="row">
            <a href="/register">Novo membro?</a> 
            <a href="/forgot">Esqueceu a senha?</a> 
            </div>
            
        </div>
    );
  }
}
