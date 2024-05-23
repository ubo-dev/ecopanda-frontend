import React from 'react';
import './Answer.css';


function Answer({ answer, onSelect, isSelected }) {
    return (
        <div className={`answer-item ${isSelected ? 'selected' : ''}`} onClick={onSelect}>
            <h2>{answer.text}</h2>
        </div>
    );
}

export default Answer;