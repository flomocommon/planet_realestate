import * as constants from './constants'

// TODO: refactor state so each app has its own state tree / reducers etc
export const initialState = {
  initialized: false,
  isLoading: false, // flag used to disable the ui / show a spinner etc,
  planets: [],
  cart: [],
}


export default (state = initialState, { payload, type }) => {
  switch(type){
    case constants.INITIALIZE: {
      return Object.assign({}, { ...initialState })
    }
    case constants.REQUEST_PLANETS:
      return Object.assign({}, { ...state })
    case constants.REQUEST_PLANETS_SUCCESS: {
      const { planets } = state
      const newPlanets = Object.assign({}, { ...planets }, { ...payload });
      return Object.assign({}, { ...state }, {...newPlanets})
    }
    case constants.REQUEST_PLANETS_ERROR: 
    case constants.ADD_TO_CART_ERROR: {
      return Object.assign({}, { ...state }, { ...payload })
    }
    case constants.ADD_TO_CART: {
      const { cart } = state
      const newCart =  [ ...cart, {...payload} ];
      return Object.assign({}, { ...state }, { cart: newCart })
    }   
    default: {
      return state;
    }
  }
}
