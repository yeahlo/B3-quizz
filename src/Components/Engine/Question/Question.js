import React, {Component} from 'react';

class Question extends Component {
    constructor() {
        super();

        this.state = {
            answerChecked: [],
        }
    }

    handleChange(answer) {
        let data = this.state.answerChecked.slice(0);
        console.log(answer);

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
            console.log('after', this.state.answerChecked);
        });
    }

    render() {
        const content = <h2>this.props.contentQuestion</h2>;
        // const content = <h2>TEST TITLE</h2>;

        const disable = this.props.disable;
        // const disable = false;
        let allowOrNot = disable === true ? "disable" : "";
        // const content = <h2>{this.props.content}</h2>;

        // let answers = [
        //     'une frite',
        //     'une patate'
        // ];
        const listAnswers = this.props.answers.map((answer, index) =>
            // const listAnswers = answers.map((answer, index) =>

            <div key={index}>
                <label htmlFor="answer">{answer.contentAnswer}</label>
                {/*<label htmlFor="answer">{answer}</label>*/}
                <input disabled={allowOrNot} id="anwser" onChange={() => this.handleChange(answer)} type="checkbox"/>
            </div>
        );
        return (
            <div className="Question">
                {content}
                {listAnswers}
                {/*<button disabled={allowOrNot} onClick={() => console.log("test")}>save</button>*/}
                <button disabled={allowOrNot} onClick={() => this.props.validate(this.state.answerChecked)}>Save
                </button>
            </div>
        );
    }
}

export default Question;