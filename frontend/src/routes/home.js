import React, { Component } from 'react';
import Navbar from './../components/navbar.js';

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <div
                style={{
                    display: 'flex',
                    flexDirection: 'column',
                    height: '100vh'
                }}
            >
                <Navbar />
            </div>
        )
    }
}


export default (Home);