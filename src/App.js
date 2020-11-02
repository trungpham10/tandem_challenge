import React, { Component } from 'react';
import Questions from './components/Questions';
import './style.css';

export default class App extends Component {
  componentDidMount() {
    fetch('/data.json')
      .then(res => res.json())
      .then(data => {
        console.log(data);
        this.setState({
          data: data,
          shuffledAnswers: [data[0].correct, ...data[0].incorrect].sort(() => Math.random() - 0.5),
        })
      })
  }

  constructor(props) {
    super(props);
    this.state = {
      data: [],
      score: 0,
      index: 0,
      shuffledAnswers: [],
    }
    this.handleScore = this.handleScore.bind(this);
    this.handleIndex = this.handleIndex.bind(this);
    this.handleShuffle = this.handleShuffle.bind(this);
  }

  handleScore() {
    this.setState({
      score: this.state.score + 1,
    });
  }

  handleIndex() {
    this.setState({
      index: this.state.index + 1,
    })
  }

  handleShuffle() {
    if (this.state.index+1 < this.state.data.length) {
        this.setState({
          shuffledAnswers: [this.state.data[this.state.index + 1].correct, ...this.state.data[this.state.index + 1].incorrect].sort(() => Math.random() - 0.5),
      })
    }
  }     
  
  render() {
    return this.state.data.length > 0 ? (
      <div className="App">
        {this.state.index >= this.state.data.length ? (
          <h1>Game Ended! Your score is {this.state.score}/{this.state.data.length}</h1>
        ) : (
          <Questions data={this.state.data[this.state.index]} score={this.state.score} handleScore={this.handleScore} handleIndex={this.handleIndex} handleShuffle={this.handleShuffle} shuffledAnswers={this.state.shuffledAnswers}/>
        )}
      </div>
    ) : (
      <div></div>
    )
  }
}
