import logo from './pentagram.png';
import './App.css';
import './bootstrap.css';
import React, { Component } from 'react';
import ServerAutoSuggest from './server.autosuggest';

class App extends Component {

  render() {
    return (
      <div className="App container  ">
        <div className="row">
          <div className="col-md-12 main-container"><h2>The Best Metal-Archives Searcher</h2>
            <header className="App-header">
              <img src={logo} className="App-logo" alt="logo" />

              <div className="main">
                <ServerAutoSuggest />
              </div>

            </header>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
