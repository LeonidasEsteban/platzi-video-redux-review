import React from 'react';
import ReactDOM from 'react-dom';
import Home from '../pages/home';
import api from '../api.json';

import { createStore } from 'redux';
import { Provider } from 'react-redux';

// import reducer from '../reducers/search';
import reducer from '../reducers/search';
console.log(reducer)
// import { normalize, schema } from 'normalizr';
import data from '../schemas/index';


const initialState = {
  // ...api,
  query: '',
  searchResults: [],
  entities: data.entities,
  categories: data.result.categories,
  modalVisibility: true,

}



const store = createStore(
  reducer,
  initialState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

ReactDOM.render(
  <Provider store={store}>
    <Home />
  </Provider>
, document.getElementById('root'));
