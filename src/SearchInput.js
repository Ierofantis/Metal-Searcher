import React, { useState, useCallback } from 'react';
import debounce from 'lodash.debounce';

import { Input, Ul, Li, SuggestContainer } from './SearchInputStyle';
import ReactTooltip from 'react-tooltip';

export default function SearchInput({
    loading,
    options,
    requests,
    placeholder,
}) {
    const [inputValue, setInputValue] = useState('');

    const debouncedSave = useCallback(
        debounce((newValue) => requests(newValue), 1000),
        []
    );

    const updateValue = (newValue) => {
        setInputValue(newValue);
        debouncedSave(newValue);
    };

    const openInNewTab = (url) => {
        const newWindow = window.open(url, '_blank', 'noopener,noreferrer')
        if (newWindow) newWindow.opener = null
    }

    return (
        <div>
            <Input
                value={inputValue}
                onChange={(input) => updateValue(input.target.value)}
                placeholder={placeholder}
            />
            <SuggestContainer>
                <Ul>
                    {loading && <Li>Loading...</Li>}
                    {options.map((option, index) => (
                        <Li
                            key={index}
                        >
                            <div data-tip='' data-for={option.title} className="metal-link" dangerouslySetInnerHTML={{ __html: option.band_url }} />
                            <ReactTooltip id={option.title} >{option.genre} from {option.country}</ReactTooltip>
                        </Li>
                    ))}

                </Ul>
            </SuggestContainer>
        </div>
    );
}