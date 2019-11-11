import React from 'react';

function QuestionComponent(props){

        const { question } = props;
        const { state } = props;
        return (
            <div>
                <div className='question' onClick={() => props.onClick(state,question.index)}>
                    <p className='ask'> {question.topic} </p>
                    <div className={`arrow_down bookmark_arrow ${question.arrow}`}></div>
                </div>
                <div className='answer hidden_answer bookmark' id={`${question.id}`} style={{ display: `${question.class}` }}>
                    <p className='ask'> {question.body} </p>
                </div>
            </div>
        )
    }

export default QuestionComponent;