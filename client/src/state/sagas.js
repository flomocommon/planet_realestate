import { put, takeLatest, call } from 'redux-saga/effects'
import * as actions from './actions';
import * as constants from './constants'
import * as API from './api'


function* initialize(){
  try {
    // TODO: use this to prepare all our initial data
    yield put(actions.initializeSuccess())
  } catch (err){
    console.error(err);
    yield put(actions.initializeError())
  }
}

function* requestPlanets(){
  try {
    const planets = yield call(API.requestPlanets)
    if (planets) {
      yield put(actions.requestPlanetsSuccess(planets));
    }
  } catch(err){
    console.error(err);
    yield put(actions.requestPlanetsError(err));
  }
}

export default function* watch(){
  yield takeLatest(constants.INITIALIZE, initialize);
  yield takeLatest(constants.REQUEST_PLANETS, requestPlanets);
}