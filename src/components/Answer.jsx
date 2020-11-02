import React from 'react';
import '../style.css';

export default class Answer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }

    checkAnswer = (answer) => {
        if (this.props.correctAnswer === answer) {
            alert('Correct!');
            this.props.handleScore();
        } else {
            alert('Wrong! The correct answer is: '.concat(this.props.correctAnswer));
        }
        this.props.handleIndex();
        this.props.handleShuffle();
    }

    render() {
        return (
            <div className="perChoice">
                <button onClick={() => this.checkAnswer(this.props.answer)}>
                    {this.props.answer}
                </button>
            </div>
        )
    }
}