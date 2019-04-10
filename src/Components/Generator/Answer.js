import React, {Component} from 'react';

class Answer extends Component {

    constructor() {
        super();

        this.state = {
            contentAnswer: "",
            isCorrect: false,
        };
        this.handleChecked = this.handleChecked.bind(this);
        this.addContent = this.addContent.bind(this);
    }

    handleChecked(e) {
        this.setState({isCorrect : e.target.checked})
    }

    addContent(e) {
        this.setState({contentAnswer : e.target.value})
    }


    render() {

console.log(this.state);
        return (

            <div className="answer">
                <input name="correctAnswer" type="checkbox" onChange={(e) => this.handleChecked(e)}/>
                <input name="contentAnswer" type={"text"} onChange={(e) => this.addContent(e)}/>
            </div>
        );
    }
}

export default Answer;