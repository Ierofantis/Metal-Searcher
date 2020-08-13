// server.autosuggest.js
import React from 'react';
import Autosuggest from 'react-autosuggest';
import './autosuggest.css';

class ServerAutoSuggest extends React.Component {
    constructor() {
        super();

        //Define state for value and suggestion collection
        this.state = {
            value: '',
            suggestions: []
        };
    }

    // Filter logic
    getSuggestions = async (value) => {
        //http://localhost:3000/api/sendData?band=<a href='https://www.metal-archives.com/bands/Ahilless/3540418631'>Ahilless</a>
        const inputValue = value.trim().toLowerCase();
        const inputLength = inputValue.length;

        let response = await fetch("http://localhost:3000/api/autosearch/" + inputValue);

        let data = await response.json()
        return data;
        // return inputLength === 0 ? [] : data.filter(lang =>
        //     lang.title.toLowerCase().slice(0, inputLength) === inputValue
        // );
    };

    // Trigger suggestions
    getSuggestionValue = suggestion => suggestion.title;

    // Render Each Option
    renderSuggestion = suggestion => (
        <span className="sugg-option">
            <span className="name">
                {suggestion.title}
            </span>
        </span>
    );

    // OnChange event handler
    onChange = (event, { newValue }) => {
        this.setState({
            value: newValue
        });
    };

    // Suggestion rerender when user types
    onSuggestionsFetchRequested = ({ value }) => {
        this.getSuggestions(value)
            .then(data => {
                if (data.Error) {
                    this.setState({
                        suggestions: []
                    });
                } else {
                    this.setState({
                        suggestions: data
                    });
                }
            })
    };

    // Triggered on clear
    onSuggestionsClearRequested = () => {
        this.setState({
            suggestions: []
        });
    };

    render() {
        const { value, suggestions } = this.state;

        // Option props
        const inputProps = {
            placeholder: 'Type movie name',
            value,
            onChange: this.onChange
        };

        // Adding AutoSuggest component
        return (
            <Autosuggest
                suggestions={suggestions}
                onSuggestionsFetchRequested={this.onSuggestionsFetchRequested}
                onSuggestionsClearRequested={this.onSuggestionsClearRequested}
                getSuggestionValue={this.getSuggestionValue}
                renderSuggestion={this.renderSuggestion}
                inputProps={inputProps}
            />
        );
    }
}

export default ServerAutoSuggest;