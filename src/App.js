import React from 'react';
import logo from './logo.svg';
import './App.scss';
import NavBar from './modules/layout/component/NavBar.component';

function App() {
    return <div className="App">
        <NavBar />
        <div className="app-content">
            <img src={logo} className="App-logo" alt="logo" />
        </div>
    </div>;
}

export default App;
