import React, { Component } from 'react';
import { Provider } from 'react-redux';
import configureStore from './store';

import {Container} from './components/styled';
import CodeChallenge from './components/CodeChallenge';
import SearchForm from './containers/SearchForm';
import ReposDisplay from './containers/ReposDisplay';

import './App.css';

const store = configureStore();

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <Container id="main-container">
            <CodeChallenge />
            <hr />
            <SearchForm />
            <ReposDisplay />
          </Container>
        </div>
      </Provider>
    );
  }
}

export default App;
