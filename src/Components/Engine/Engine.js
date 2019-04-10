import React, { Component } from 'react';
// import Question from './Question/Question';
import Begin from './Begin/Begin';
import { Route, Link } from 'react-router-dom';
import './engine.css';
import Home from "../Home/Home";

class Engine extends Component {

    constructor(props){
        super(props);
        this.json = {
            title: "test",
            questions: [
                {
                    contentQuestion: "1+1 ?",
                    answers: [
                        {
                            contentAnswer: "1",
                            correct: false
                        },
                        {
                            contentAnswer: "2",
                            correct: true
                        },
                        {
                            contentAnswer: "3",
                            correct: false
                        }
                    ]
                }
            ]
        };

        this.state = {
            answers: [],
            finish: false,
            currentQuestion: this.props.match.params.index
        }
    }

    validate(answers){
        let newAnswers = this.state.answers.slice(0);
        newAnswers[this.props.match.index] = answers;
        this.setState({
            answers: newAnswers
        });

        if(this.state.answers.length === this.json.questions.length){
            this.setState({
                finish: true
            });
        }
    }

    getPoints(){
        let points = 0;
        this.json.questions.forEach((question, indexQuestion) => {
            let isOk = true;
            question.answers.forEach((answer, indexAnswer) => {
                if(answer.correct && !this.state.answers[indexQuestion].includes(indexAnswer)){
                    isOk = false;
                }
                else if(!answer.correct && this.state.answers[indexQuestion].includes(indexAnswer)){
                    isOk = false;
                }
            });

            if(isOk){
                points++;
            }
        });
        return points;
    }

    prev(){
        let prev = this.props.match.params.index - 1;
        this.setState({
            currentQuestion: prev
        });
        this.props.history.push('/engine/' + this.props.match.params.id + "/" + prev);
    }

    next(){
        let next = Number(this.props.match.params.index) + 1;
        this.setState({
            currentQuestion: next
        });
        this.props.history.push('/engine/' + this.props.match.params.id + "/" + next);
    }

    render() {
        return (
            <div className="">
                <h1>{this.json.title}</h1>

                <Route exact path={`${this.props.match.url}/:id`} component={Begin}/>

                {this.props.match.params.index === undefined && <Begin/>}
                <Route path={`${this.props.match.url}/:id/:index`} component={Home} />

                {this.state.currentQuestion !== undefined && this.state.currentQuestion !== this.json.questions.length &&
                    <button onClick={() => this.next()}>
                        Next
                    </button>
                }
                {this.state.currentQuestion !== undefined && this.state.currentQuestion !== 1 &&
                    <button onClick={() => this.prev()}>
                        Previous
                    </button>
                }
            </div>
        );
    }
}

export default Engine;