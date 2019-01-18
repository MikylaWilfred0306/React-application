import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src="https://msupodcastcom.files.wordpress.com/2018/08/main-logo-2.png?w=700&h=&crop=1" alt="logo" />
          <p>
           Come listen to my podcast.
          </p>
          <a
            className="App-link"
            href="https://msu-podcast.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
           Modern Shakespeare Uncensored
          </a>
        </header>
      </div>
    );
  }
}

export default App;
