import { compose, createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga'
import rootReducer from './rootReducer'
import sagas from './sagas'

function* rootSaga(){
  yield [
    sagas()
  ]
}

export default (initialState = {}) => {
  const sagaMiddleware = createSagaMiddleware()
  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose; // eslint-disable-line
  const store = createStore(
    rootReducer,
    initialState,
    composeEnhancers(
      applyMiddleware(sagaMiddleware),
    ),
  )
  // run the root saga
  sagaMiddleware.run(rootSaga)
  return store
}
