import React, { Component } from 'react';
import { Provider } from 'react-redux';
import configureStore from './store';

import Container from './components/Container';
import logo from './logo.svg';
import './App.css';

const store = configureStore();
class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <Container>
            <p> This is your root component </p>
          </Container>
        </div>
      </Provider>
    );
  }
}

export default App;
