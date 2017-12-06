import React from 'react';
import ReactDOM from 'react-dom';
import Home from '../pages/home';
import api from '../api.json';

import { createStore } from 'redux';
import { Provider } from 'react-redux';

// import reducer from '../reducers/search';
import reducer from '../reducers/index';
// console.log(reducer)
// import { normalize, schema } from 'normalizr';
import data from '../schemas/index';

import { fromJS } from 'immutable';

const initialState = fromJS({
  data: {
    // ...api,
    entities: data.entities,
    // search: [],
    search: '',
    categories: data.result.categories,
  },
  modal: {
    visibility: false,
    mediaId: null,
  }
})



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
