import React, { Component } from 'react';
import './App.css';

class App extends Component {

  state = {
    todos: [
      {
        id: '1',
        content: 'Call wife',
        isComplete: false
      },
      {
        id: '2',
        content: 'Pay debt',
        isComplete: false
      },
      {
        id: '3',
        content: 'Buy new gundam',
        isComplete: true
      }
    ]
  }

  render() {
    return (
      <div className="App">
        <section class="hero is-link">
          <div class="hero-body">
            <div class="container">
              <h1 class="title">
                Demo ToDo
              </h1>
              <h2 class="subtitle">
                React.Js + Bulma
              </h2>
            </div>
          </div>
          <div class="tabs is-centered is-boxed is-medium">
            <ul>
              <li class="is-active">
                <a href="https://www.vidio.com">
                  <span>Active (3)</span>
                </a>
              </li>
              <li>
                <a href="https://www.vidio.com">
                  <span>Complete (1)</span>
                </a>
              </li>
            </ul>
          </div>
        </section>
      </div>
    )
  }
}


export default App;
