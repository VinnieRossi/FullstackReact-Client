import React, { Component } from 'react';
import logo from '../logo.svg';
import '../App.css';
import {List, Map} from 'immutable';

class App extends Component {
  render() {
    return React.cloneElement(this.props.children);
  }
}

export default App;
