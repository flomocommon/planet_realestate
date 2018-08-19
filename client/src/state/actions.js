import { createAction } from 'redux-actions';
import * as constants from './constants'

const initialize = createAction(constants.INITIALIZE);
const initializeSuccess = createAction(constants.INITIALIZE_SUCCESS, () => ({ initialized: true }));
const initializeError = createAction(constants.INITIALIZE_ERROR, () => ({ initialized: false }));
const requestPlanets = createAction(constants.REQUEST_PLANETS);
const requestPlanetsSuccess = createAction(constants.REQUEST_PLANETS_SUCCESS);
const requestPlanetsError = createAction(constants.REQUEST_PLANETS_ERROR);
const addToCart = createAction(constants.ADD_TO_CART);
const addToCartSuccess = createAction(constants.ADD_TO_CART_SUCCESS);
const addToCartError = createAction(constants.ADD_TO_CART_ERROR);


export {
  initialize,
  initializeSuccess,
  initializeError,
  requestPlanets,
  requestPlanetsSuccess,
  requestPlanetsError,
  addToCart,
  addToCartSuccess,
  addToCartError
}