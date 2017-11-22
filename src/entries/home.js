import React from 'react';
import ReactDOM from 'react-dom';
import Home from '../pages/home';
import api from '../api.json';

import { createStore } from 'redux';
import { Provider } from 'react-redux';

import reducer from '../reducers/search';

import { normalize, schema } from 'normalizr';



// const xyw = new schema.Entity('category', options = {idAttribute:})


const media = new schema.Entity('media', {}, {
  idAttribute: 'id',
  processStrategy: (value, parent, key) => ({...value, category: parent.id})
});

const category = new schema.Entity('categories', {
  playlist: new schema.Array(media),
});

// Entity(key, definition = {}, options = {})

const categories = { categories: new schema.Array(category) }

// const normalizedData = normalize(data, schema);
const normalizedData = normalize(api, categories);
console.log(normalizedData);

const initialState = {
  ...api,
  query: '',
  searchResults: [],
  entities: normalizedData.entities
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
