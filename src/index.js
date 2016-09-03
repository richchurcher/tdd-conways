import React from 'react'
import {render} from 'react-dom'
import {Provider} from 'react-redux'
import {createStore} from 'redux'

import reducers from './reducers'
import GridContainer from './components/GridContainer'

let store = createStore(reducers, window.devToolsExtension && window.devToolsExtension())

document.addEventListener('DOMContentLoaded', () => {
  render(
    <Provider store={store}>
      <GridContainer />
    </Provider>,
    document.getElementById('grid')
  )
})
