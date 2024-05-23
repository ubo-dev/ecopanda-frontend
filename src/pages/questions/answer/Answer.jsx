import React from 'react';
import './Answer.css';

function Answer({ answer, onClick, isSelected }) {
    return (
        <div 
            className={`answer-item ${isSelected ? 'selected' : ''}`} 
            onClick={onClick}
        >
            <h2>{answer}</h2>
        </div>
    );
}

export default Answer;
