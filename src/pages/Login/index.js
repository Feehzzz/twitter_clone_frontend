import React, { Component } from 'react';
import api from '../../services/api'
import twitterlogo from '../../twitter.svg';
import './style.css';

// import { Container } from './styles';

export default class Login extends Component {
    state = {
        email: '',
        password: ''

    };

    handleSubmit = async e => {
        e.preventDefault();

        const { email, password } = this.state;
        
        if (!email.length || !password.length) return;
        const res = await api.post('users/auth', {
            email, 
            password
        })

        if(res.status === 200) {
            localStorage.setItem('token', res.data.token);
            localStorage.setItem('twitter:username', res.data.user.username);
            this.props.history.push('/timeline')
        }
    };

    handleInput = e => {
        this.setState({[e.target.name]: e.target.value});
    };
    
    
  render() {
    return (
        <div className="login-wrapper">
            <img src={twitterlogo} alt="twitter_clone-logo" />
            <form onSubmit={this.handleSubmit}>
                <input 
                value={this.state.email}
                onChange={this.handleInput}
                placeholder="E-mail"/>
                <input type="password"
                value={this.state.password}
                onChange={this.handleInput}
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
