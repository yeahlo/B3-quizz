import React, { Component } from 'react';

import Question from "./Question"

class Generator extends Component {

    constructor(){
        super()
        this.state = {
            quizz: [
                {title: ''},
            ]
        }
        this.saveTitleQuizz = this.saveTitleQuizz.bind(this)
        this.addQuestion = this.addQuestion.bind(this)
        this.saveQuizz = this.saveQuizz.bind(this)
        this.testQuizz = this.testQuizz.bind(this)
    }

    saveTitleQuizz(){
        alert('keyPressed')
    }

    addQuestion(){
        let idQuestion = Date.now().toString()

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

    render() {
        return (
            <div className="container">
                <input type={"text"} placeholder={"Titre du quizz"} onChange={this.saveTitleQuizz}/>
                <div className={"questions-container"}>
                </div>
                <button onClick={this.addQuestion}>Ajouter une question</button>
                <button onClick={this.saveQuizz}>Sauvegarder</button>
                <button onClick={this.testQuizz}>Tester</button>
            </div>
        );
    }


}

export default Generator;