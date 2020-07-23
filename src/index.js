import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter } from 'react-router-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'

const initState = {
  itemsInCart: [],
  itemCount: 0,
  startAddAnimation: false
}

const setState = (state=initState, action) => {

  switch(action.type){
    case "addItem": return { ...state, itemsInCart: [...state.itemsInCart, action.itemId ], itemCount: state.itemCount+action.qty, startAddAnimation: true }
    case "removeItem": return { ...state, itemCount: state.itemCount-1 } 
    case "setItemQty": return { ...state, itemCount: action.qty } 
    case "stopAddAnimation": return { ...state, startAddAnimation: false }
    default: return { ...state, itemCount: 0 }
  }
}

ReactDOM.render(
  <React.StrictMode>
    <Provider store={ createStore(setState, initState) }>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
