import React, { Component } from 'react';

import Engine from './Components/Engine/Engine';
import Generator from './Components/Generator/Generator';
import Home from './Components/Home/Home';

import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import './App.css';

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
                <Route path='/engine/' component={Engine}/>
            </Router>
        );
    }
}

export default App;
