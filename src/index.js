import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {Provider} from "react-redux";
import {createStore} from "redux";

const reducer = (state = 0, action) => {
    if (action.type === "plus"){
        return state + 1;
    }
    if (action.type === "minus" && state > 0){
        return state - 1;
    }
    return state;
};
const store = createStore(reducer);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
