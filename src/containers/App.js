import React, { Component } from 'react';
import './App.css';

class App extends Component {

  state = {
    tasks: [
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

            <section className="hero is-link">
              <div className="hero-body">
                <div className="container">
                  <h1 className="title">
                    Demo ToDo
                  </h1>
                  <h2 className="subtitle">
                    React.Js + Bulma
                  </h2>
                </div>
              </div>
              <div className="tabs is-centered is-boxed is-medium">
                <ul>
                  <li className="is-active">
                    <a href="https://www.vidio.com">
                      <span>Active</span>&nbsp;&nbsp;
                      <span className="tag is-rounded is-warning">3</span>
                    </a>
                  </li>
                  <li>
                    <a href="https://www.vidio.com">
                      <span>Complete</span>&nbsp;&nbsp;
                      <span className="tag is-rounded is-warning">1</span>
                    </a>
                  </li>
                </ul>
              </div>
            </section>

            <div className="columns is-multiline is-centered">
              <div className="column is-4">

                <section className="section">

                  <div className="container pb-5">
                    <div className="card">
                      <div className="card-content">
                        <div className="content">
                          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis mauris.
                          <a href="#">@bulmaio</a>. <a href="#">#css</a> <a href="#">#responsive</a>
                          <br/>
                          <time datetime="2016-1-1">11:09 PM - 1 Jan 2016</time>
                        </div>
                      </div>
                      <footer className="card-footer">
                        <a href="#" className="card-footer-item">Edit</a>
                        <a href="#" className="card-footer-item">Done</a>
                      </footer>
                    </div>
                  </div>

                  <div className="container pb-5">
                    <div className="card">
                      <div className="card-content">
                        <div className="content">
                          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis mauris.
                          <a href="#">@bulmaio</a>. <a href="#">#css</a> <a href="#">#responsive</a>
                          <br/>
                          <time datetime="2016-1-1">11:09 PM - 1 Jan 2016</time>
                        </div>
                      </div>
                      <footer className="card-footer">
                        <a href="#" className="card-footer-item">Edit</a>
                        <a href="#" className="card-footer-item">Done</a>
                      </footer>
                    </div>
                  </div>

                  <div className="container pb-5">
                    <div className="card">
                      <div className="card-content">
                        <div className="content">
                          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis mauris.
                          <a href="#">@bulmaio</a>. <a href="#">#css</a> <a href="#">#responsive</a>
                          <br/>
                          <time datetime="2016-1-1">11:09 PM - 1 Jan 2016</time>
                        </div>
                      </div>
                      <footer className="card-footer">
                        <a href="#" className="card-footer-item">Edit</a>
                        <a href="#" className="card-footer-item">Done</a>
                      </footer>
                    </div>
                  </div>

                </section>

              </div>
            </div>

            <footer className="footer">
              <div className="content has-text-centered">
                <p>
                  <strong>Bulma</strong> by <a href="https://jgthms.com">Jeremy Thomas</a>. The source code is licensed
                  <a href="http://opensource.org/licenses/mit-license.php">MIT</a>. The website content
                  is licensed <a href="http://creativecommons.org/licenses/by-nc-sa/4.0/">CC BY NC SA 4.0</a>.
                </p>
              </div>
            </footer>

      </div>
    )
  }
}


export default App;
