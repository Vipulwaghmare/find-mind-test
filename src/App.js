import React from 'react';
import './App.css';
import Routes from './Routes';

// redux
import { createStore } from 'redux';
import { Provider } from 'react-redux'
import { rootReducer } from './Components/Reducer/rootReducer';

const store = createStore(rootReducer)

function App() {
  return (
      <Provider store={store}>
        <Routes />
      </Provider>
  );
}

export default App;
