import React from 'react';
import './Question.css';
import Answer from '../answer/Answer';

function Question({ question, onAnswerSelect, selectedAnswer }) {
    return (
        <>
            <h1>{question.name}</h1>
            <div className="answers-list">
                {question.answers.map((answer, index) => (
                    <Answer 
                        key={index} 
                        answer={answer} 
                        onSelect={() => onAnswerSelect(answer)} 
                        isSelected={selectedAnswer === answer} 
                    />
                ))}
            </div>
        </>
    );
}

export default Question;