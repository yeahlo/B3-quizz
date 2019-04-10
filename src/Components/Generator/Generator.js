import React, { Component } from 'react';
import './generator.css';

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

        this.questionRef = []
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
        let quizz = {};
        quizz.title = this.state.title;
        quizz.questions = [];
        this.questionRef.map( (question, index) =>{
                if(question){
                    quizz.questions.push(question.getJson());
                }
            }
        );
        //console.log(JSON.stringify(quizz));

        fetch('http://localhost:3006/api/save', {
            method: "POST",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(quizz)
        })
            .then(value => {
                console.log("ok");
            })
            .catch(reason => {

            })
    }

    testQuizz(){
        alert('test')
    }

    generatedJson(){
        return ''
    }

    renderQuestions(){

        this.questionRef = [];

        const questions = this.state.questions.map( (question, index) =>
            <Question ref={q => {this.questionRef.push(q)}} key={index} idQuestion={question.idQuestion}/>
        );
        return questions;
    }

    render() {
        return (
            <div className="container-quizz">
                <input className={"titleQuizz"} type={"text"} placeholder={"Titre du quizz"} value={this.state.title} onChange={this.saveTitleQuizz}/>
                <div className={"questions-container"}>
                    { this.renderQuestions() }
                </div>
                <button className={"btn-question"} onClick={this.addQuestion}>Ajouter une question</button>
                <button className={"btn-question"} onClick={this.saveQuizz}>Sauvegarder</button>
                <button className={"btn-question"} onClick={this.testQuizz}>Tester</button>
            </div>
        );
    }


}

export default Generator;