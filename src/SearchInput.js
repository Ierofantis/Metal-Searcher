import React, { useState, useCallback } from 'react';
import debounce from 'lodash.debounce';

import { Input, Ul, Li, SuggestContainer } from './SearchInputStyle';

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
                            <div className="metal-link" dangerouslySetInnerHTML={{ __html: option.title }} />
                        </Li>
                    ))}

                </Ul>
            </SuggestContainer>
        </div>
    );
}