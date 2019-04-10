import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class Begin extends Component {
    render() {
        return (
            <Link to={`${this.props.match.url}/1`}>
                <button>Commencer</button>
            </Link>
        );
    }
}

export default Begin;