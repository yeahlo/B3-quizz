import React, {Component} from 'react';

import Answer from './Answer'

class Question extends Component {

    constructor() {
        super();

        this.state = {
            labelQuestion: "",
            answers: []
        }
        this.answerRef = []
    }


    addAnswer() {
        let idAnswer = Date.now().toString();
        let newanswer = this.state.answers.slice(0);
        newanswer.push(idAnswer);
        this.setState({answers: newanswer});
        console.log()
    }

    getJson(){
        let jsonQuestion = {};
        jsonQuestion.contentQuestion = this.state.labelQuestion;
        jsonQuestion.answers = [];
        this.answerRef.map((answer, index) => {
                if (answer) {
                    jsonQuestion.answers.push(answer.getJson());
                }
            }
        );
        return jsonQuestion;
    }

    renderAnswer() {
        this.answerRef = [];

        const answers = this.state.answers.map((answer, key) =>
            <Answer ref={q => {this.answerRef.push(q)}} key={key}/>
        );
        return answers;
    }

    saveLabelQuestion(e){
        this.setState({ labelQuestion: e.target.value });
    }

    render() {
        return (
            <div className="">
                <input type={"text"} placeholder={"Question"} onChange={(e) => this.saveLabelQuestion(e)}/>
                <div className={"container-questions"}>
                    {this.renderAnswer()}
                </div>
                <button onClick={() => this.addAnswer()}>Add Answer</button>
            </div>
        );
    }
}

export default Question;