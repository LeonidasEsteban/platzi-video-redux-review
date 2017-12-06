import React from 'react';
import ReactDOM from 'react-dom';
import Home from '../pages/home';
import api from '../api.json';

import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
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
  isLoading: {
    active: false
  },
  modal: {
    visibility: false,
    mediaId: null,
  }
})


// function logger({ getState, dispatch }) {
//   return (next) => {
//     return (action) => {
//       console.log('Vamos a enviar está acción', action)
//       let returnValue = next(action)
//       console.log('Este es el nuevo estado de la aplicación', getState().toJS())
//       return returnValue
//     }
//   }
// }

// const logger = ({ getState, dispatch }) => next => action => {
//   console.log('Vamos a enviar está acción', action)
//   let returnValue = next(action)
//   console.log('Este es el nuevo estado de la aplicación', getState().toJS())
//   return returnValue
// }

const store = createStore(
  reducer,
  initialState,
  // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  // applyMiddleware(logger)
  composeWithDevTools(
    applyMiddleware(
      logger,
      thunk
    ),
  )
);

ReactDOM.render(
  <Provider store={store}>
    <Home />
  </Provider>
, document.getElementById('root'));
