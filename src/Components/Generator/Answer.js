import React, { Component } from 'react';

class Answer extends Component {
    render() {
        return (
            <div className="answer">
                <input name="correctAnswer" type="checkbox"/>
                <input name="contentAnswer" type={"text"}/>
            </div>
        );
    }
}

export default Answer;