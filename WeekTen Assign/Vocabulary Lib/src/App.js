import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import styled from 'styled-components';



class App extends Component {
  render() {
    return (
      <Appstyle>
        <Appheader>
          <h1 className="App-title">Welcome to React</h1>
        </Appheader>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </Appstyle>
    );
  }
}

export default App;
