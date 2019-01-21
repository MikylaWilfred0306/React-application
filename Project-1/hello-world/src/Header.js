import React, { Component } from 'react';
import './App.css';


class Header extends Component {
  render(){
    return(
      <div> 
 <header className="App-header">

 {
   //This is how to comment
 }
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
          <a
            className="App-link"
            href="https://open.spotify.com/show/5ED4NKsDEgtBIKlzh8HcrS?si=ZFEA84KYTzGpIXJ0foGDQg"
            target="_blank"
            rel="noopener noreferrer"
          >
           Spotify
          </a>
        </header>
      </div>
      );
    }
  }

  export default Header;