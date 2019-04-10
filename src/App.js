import React, {Component} from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Home from './Components/Home/Home'
import Generator from './Components/Generator/Generator'
import Engine from './Components/Engine/Engine'


class App extends Component {
    render() {
        return (
            <Router>
                <div className="App">
                    <ul>
                        <li><Link to={'/generator/'}>Generator</Link></li>
                        <li><Link to={'/engine/'}>Engine</Link></li>
                    </ul>
                </div>

                <Route path={'/'} exact component={Home}/>
                <Route path='/generator/' component={Generator}/>
                <Route path='/engine/:id?/:index?' component={Engine}/>
            </Router>
        );
    }

    componentDidMount() {
        /*
        fetch('http://localhost:3006/api/save', {
            method: "POST",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({b: 'Textual content'})
        })
            .then(value => {

            })
            .catch(reason => {

            })
            */
    }
}

export default App;
