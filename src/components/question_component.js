import React, { Component } from 'react';
import PropTypes from "prop-types";

class QuestionComponent extends Component {
    static propTypes = {
        childVisibility: PropTypes.bool,
        visibility: PropTypes.string
    }
    static defaultProps = {
        childVisibility: false,
        visibility: 'none'
    }

    render() {
        const { question } = this.props;
        return (
            <div>
                <div className='question' onClick={this.props.onClick}>
                    <p className='ask'> {question.topic} </p>
                    <div className={`arrow_down bookmark_arrow ${question.arrow}`}></div>
                </div>
                <div className='answer hidden_answer bookmark' id={`${question.id}`} style={{ display: `${question.class}` }}>
                    <p className='ask'> {question.body} </p>
                </div>
            </div>
        )
    }
}

export default QuestionComponent;