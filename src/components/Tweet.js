import React, { Component } from 'react';

import like from '../like.svg';
import './Tweet.css';
// import api from '../services/api';
// import { Container } from './styles';

export default class Tweet extends Component {
  render() {
    const { tweet } = this.props;

    return (
      <li className="tweet">
        <strong> {tweet.author}</strong>
        <p>{tweet.content}</p>
        <button type="button" onClick={this.handleLike}>
          <img src={like} alt="Like" />
          {tweet.likes}
        </button>
      </li>
    );
  }
}
