import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import { usersReducer } from './reducers'
import { router } from './router'

const store = createStore(usersReducer);

ReactDom.render(
  <Provider store={store}>
    {router}
  </Provider>,
  document.getElementById('app')
);
