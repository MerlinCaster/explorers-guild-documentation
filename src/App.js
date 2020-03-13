import React from 'react';
import './App.css';

import Skills from './pages/Skills';
import Home from './pages/Home';
import Sidebar from './ui/Sidebar';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
    return (
        <Router> 
            <div className="main">
                <Sidebar />
                <div className="container-fluid">
                    
                <Route path="/" exact component={Home}/> 
                <Route path="/skills" component={Skills}/> 
                    
                </div>
            </div>
        </Router>
    );
}

export default App;
