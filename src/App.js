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
              <p>
                <div class="main">
                  {/* <Autocomplete
                    value={this.state.val}
                    items={this.getSuggestions(this.state.val)}
                    getItemValue={item => item.title}
                    shouldItemRender={renderMetalTitle}
                    renderMenu={item => (
                      <div className="dropdown">
                        {item}
                      </div>
                    )}
                    renderItem={(item, isHighlighted) =>
                      <div className={`item ${isHighlighted ? 'selected-item' : ''}`}>
                        <div className="metal-link" dangerouslySetInnerHTML={{ __html: item.title }} />
                      </div>
                    }
                    onChange={(event, val) => this.setState({ val })}
                    onSelect={val => this.setState({ val })}
                  /> */}
                  <ServerAutoSuggest />

                </div>
              </p>
            </header>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
