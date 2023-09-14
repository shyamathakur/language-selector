import React, { Component } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Chat from './Component/Chat';
import Chat2 from './Component/Chat2';
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className='app'>
        <Router>
          <div>
            <Routes>
              <Route exact path='/' element={< Chat />}></Route>
              <Route exact path='/home' element={< Chat />}></Route>
              <Route exact path='/about' element={< Chat2 />}></Route>
            </Routes>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
