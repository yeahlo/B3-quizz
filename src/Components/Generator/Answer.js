import React, {Component} from 'react';

class Answer extends Component {

    constructor() {
        super();

        this.state = {
            contentAnswer: "",
            isCorrect: false,
        };

    }

    handleChecked(e) {
        this.setState({isCorrect : e.target.checked})
    }

    addContent(e) {
        this.setState({contentAnswer : e.target.value})
    }

    getJson(){
        let jsonAnswer = {};
        jsonAnswer.contentAnswer = this.state.contentAnswer;
        jsonAnswer.isCorrect = this.state.isCorrect;
        return jsonAnswer;
    }


    render() {
        return (

            <div className="answer">
                <input name="correctAnswer" type="checkbox" onChange={(e) => this.handleChecked(e)}/>
                <input name="contentAnswer" type={"text"} onChange={(e) => this.addContent(e)}/>
            </div>
        );
    }
}

export default Answer;