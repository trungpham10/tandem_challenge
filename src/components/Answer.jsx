import React from 'react';

export default class Answer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }

    checkAnswer = (answer) => {
        let corrected = (this.props.correctAnswer === answer);

        if (corrected) {
            alert('Correct!');
            this.props.handleScore();
        } else {
            alert('Wrong! The correct answer is: '.concat(this.props.correctAnswer));
        }
        // window.location.reload(true);
        this.setState({
            index: this.state.index + 1,
        })
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