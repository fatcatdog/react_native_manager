import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';
import reducers from './reducers';
import LoginForm from './components/LoginForm';
import Router from './Router';

class App extends Component {
  componentWillMount() {
    const config = {
      apiKey: "AIzaSyD4cdFHwue8xxohST1XqqsR1RPGtHtNZtI",
      authDomain: "manager-d1c2f.firebaseapp.com",
      databaseURL: "https://manager-d1c2f.firebaseio.com",
      projectId: "manager-d1c2f",
      storageBucket: "manager-d1c2f.appspot.com",
      messagingSenderId: "809885325434"
    };
    firebase.initializeApp(config);
  }

  render() {
    // reducer, inital state, store enhancer
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));

    return (
      <Provider store={store}>
        <Router />
      </Provider>
    );
  }
}

export default App;
