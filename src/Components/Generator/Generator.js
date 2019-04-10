import React, { Component } from 'react';

import Question from "./Question"

class Generator extends Component {

    constructor(){
        super()
        this.state = {
            title: "",
            questions: []
        }
        this.saveTitleQuizz = this.saveTitleQuizz.bind(this)
        this.addQuestion = this.addQuestion.bind(this)
        this.saveQuizz = this.saveQuizz.bind(this)
        this.testQuizz = this.testQuizz.bind(this)
    }

    saveTitleQuizz(event){
        this.setState({
            title: event.target.value
        })
    }

    addQuestion(){
        let idQuestion = Date.now().toString();

        let arrayQuestion = {
            idQuestion : idQuestion,
            contentQuestion : '',
            answers : []
        };

        let newQuestion = this.state.questions.slice(0);
        newQuestion.push(arrayQuestion);

        this.setState({questions: newQuestion});
    }

    saveQuizz(){
        alert('test')
    }

    testQuizz(){
        alert('test')
    }

    generatedJson(){
        return ''
    }

    renderQuestions(){
        const questions = this.state.questions.map( (question, index) =>
            <Question key={index} idQuestion={question.idQuestion}/>
        );
        return questions;
    }

    render() {
        return (
            <div className="container">
                <input type={"text"} placeholder={"Titre du quizz"} value={this.state.title} onChange={this.saveTitleQuizz}/>
                <div className={"questions-container"}>
                    { this.renderQuestions() }
                </div>
                <button onClick={this.addQuestion}>Ajouter une question</button>
                <button onClick={this.saveQuizz}>Sauvegarder</button>
                <button onClick={this.testQuizz}>Tester</button>
            </div>
        );
    }


}

export default Generator;