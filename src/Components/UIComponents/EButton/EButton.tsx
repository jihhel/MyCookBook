import React from 'react';
import './EButton.css';

type Props = {
    text: string
    className: string
    onClick: () => any
}

export function EButton(props: Props) {

    const {className, text, onClick} = props;

    return (
        <button className={`default-button ${className}`} onClick={onClick}>
            {text}
        </button>
    );
} 