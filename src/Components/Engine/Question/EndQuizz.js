import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Link} from "react-router-dom";
import home from './../../Home/Home'

class EndQuizz extends Component {
    render() {

        return (
            <div className="TheEnd">
                <h2 style={{"textAlign": "center"}}>Votre score est de : {this.props.score}</h2>
                <div style={{"textAlign": "center"}}>
                    <Link to={`/`}>Retourner sur la home page</Link>
                </div>
            </div>
        );
    }
}

export default EndQuizz;