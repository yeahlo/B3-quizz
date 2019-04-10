import React, {Component} from 'react';
import './mainQuestion.scss';

class Question extends Component {
    constructor() {
        super();

        this.state = {
            answerChecked: [],
            question: this.props.getQuestion(this.props.match.params.index)
        }
    }

    handleChange(answer) {
        let data = this.state.answerChecked.slice(0);

        if (data.includes(answer)) {
            data.forEach((item, index) => {
                if (item === answer) {
                    data.splice(index, 1);
                }
            });
        }
        else {
            data.push(answer);
        }
        this.setState({answerChecked: data}, () => {
        });
    }

    render() {

        const content = <h2>{this.state.question.contentQuestion}</h2>;
        // const content = <h2>TEST TITLE</h2>;

        // const content = <h2>{this.props.content}</h2>;

        // let answers = [
        //     'une frite',
        //     'une patate',
        //     'une etsts'
        // ];

        const listAnswers = this.state.question.answers.map((answer, index) =>
            // const listAnswers = answers.map((answer, index) =>

            <div className="anAnswer" key={index}>
                {/*<label htmlFor="answer">{answer.contentAnswer}</label>*/}
                <label htmlFor="answer">{answer.contentAnswer}</label>
                <input disabled={this.props.disable} id="anwser" onChange={() => this.handleChange(answer.contentAnswer)} type="checkbox"/>
            </div>
        );
        return (
            <div className="Question">
                {content}
                {listAnswers}
                <div className="save">
                    {/*<button disabled={this.props.disable} onClick={() => console.log("test")}>save</button>*/}

                    <button disabled={this.props.disable} onClick={() => this.props.validate(this.state.answerChecked)}>Save
                    </button>
                </div>
            </div>
        );
    }
}

export default Question;