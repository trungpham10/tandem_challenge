import React, {Component} from 'react';
import Answer from './Answer.jsx';

export default class Questions extends Component {
    constructor(props) {
        super(props);
        this.state = {
            shuffledAnswers: [this.props.data.correct, ...this.props.data.incorrect].sort(() => Math.random() - 0.5),
            correctAnswer: this.props.data.correct,
        }
    }

    render() {
        return (
            <div>
                <div className="Question">
                    {this.props.data.question}
                </div>

                {this.state.shuffledAnswers ? (
                    <div className="Answers">
                        <Answer answer={this.props.shuffledAnswers[0]} correctAnswer={this.props.data.correct} handleScore={this.props.handleScore} handleIndex={this.props.handleIndex} handleShuffle={this.props.handleShuffle}/>
                        <Answer answer={this.props.shuffledAnswers[1]} correctAnswer={this.props.data.correct} handleScore={this.props.handleScore} handleIndex={this.props.handleIndex} handleShuffle={this.props.handleShuffle}/>
                        <Answer answer={this.props.shuffledAnswers[2]} correctAnswer={this.props.data.correct} handleScore={this.props.handleScore} handleIndex={this.props.handleIndex} handleShuffle={this.props.handleShuffle}/>
                        <Answer answer={this.props.shuffledAnswers[3]} correctAnswer={this.props.data.correct} handleScore={this.props.handleScore} handleIndex={this.props.handleIndex} handleShuffle={this.props.handleShuffle}/>
                    </div>
                ) : (<div>Loading</div>)}
                
            </div>
        )
    }
}