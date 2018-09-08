import React, { Component } from 'react';
import { Provider } from 'react-redux';
import './App.css';
import store from './store';
import { Router, Route, browserHistory } from 'react-router';
import UserApp from './UserApp';

class App extends Component {
    render() {
      return (
        <Provider store={store}>
          <div className="container" style={{ marginTop: 20 }}>
              <UserApp />
          </div>
        </Provider>
      );
    }
}

export default App;
