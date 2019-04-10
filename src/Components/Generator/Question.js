import React, {Component} from 'react';

import Answer from './Answer'

class Question extends Component {

    constructor() {
        super();

        this.state = {

            answers: []
        }
    }

    addAnswer() {
        let idAnswer = Date.now().toString();
        let newanswer = this.state.answers.slice(0);
        newanswer.push(idAnswer);
        this.setState({answers: newanswer});
    }

    renderAnswer() {
        const answers = this.state.answers.map((answer, key) => <Answer/>);
        return answers;
    }

    render() {
        return (
            <div className="">
                <input type={"text"} placeholder={"Question"}/>
                <div className={"container-questions"}>
                    {this.renderAnswer()}
                </div>
                <button onClick={() => this.addAnswer()}>Add Answer</button>
            </div>
        );
    }
}

export default Question;