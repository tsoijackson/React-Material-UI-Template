import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Home from './routes/home.js';
import './App.css';

class App extends Component {
    render() {
        return (
            <div className="App">
                <Route path="/" component={Home} />
            </div>
        );
    }
}

export default App;