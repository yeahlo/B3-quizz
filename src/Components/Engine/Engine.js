import React, {Component} from 'react';
import Question from './Question/Question'
import EndQuizz from './Question/EndQuizz'

class Engine extends Component {
    constructor() {
        super();

        this.state = {
            score: 22222222222,
        }
    }

    render() {
        return (
            <div className="">
                <Question disable={this.state.disable} answers={this.state.answers} validate={this.state.validate(answerChecked)}/>
                <EndQuizz score={this.state.score} />
            </div>

        );
    }
}

export default Engine;