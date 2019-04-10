import React, { Component } from 'react';

import Answer from './Answer'

class Question extends Component {

    constructor(){
        super()
        this.addAnswer = this.addAnswer.bind(this)
    }

    addAnswer(){
        alert('addAnswer')
    }

    render() {
        return (
            <div className="">
                <input type={"text"} placeholder={"Question"}/>
                <div className={"container-questions"}>

                </div>
                <button onClick={this.addAnswer}>Add Answer</button>
            </div>
        );
    }
}

export default Question;