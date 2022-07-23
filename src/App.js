import React, { useState, useEffect } from 'react';
import logo from './pentagram.png';
import './App.css';
import './bootstrap.css';

import SearchInput from './SearchInput';
import { MainWrapper } from './SearchInputStyle';
import axios from 'axios';

function App() {
  const [options, setOptions] = useState([]);
  const [loading, setLoading] = useState(false);

  const url = axios.create({
    baseURL: 'https://super-archives.herokuapp.com/',
  });

  const getApiSuggestions = (word) => {
    let result = url
      .get(`api/autosearch/${word}`)
      .then((response) => {
        return response.data;
      })
      .catch((error) => {
        return error;
      });

    return result;
  };
  const getSuggestions = async (word) => {
    if (word) {
      setLoading(true);
      let response = await getApiSuggestions(word);
      setOptions(response);
      setLoading(false);
    } else {
      setOptions([]);
    }
  };


  return (
    <div className="App container  ">
      <div className="row">
        <div className="col-md-12 main-container"><h2>The Best Metal-Archives Searcher</h2>
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />

            <div className="main">
              <SearchInput
                loading={loading}
                options={options}
                requests={getSuggestions}

                placeholder="Find your favorite metal band"
              />
            </div>

          </header>
        </div>
      </div>
    </div>
  );
}

export default App;