import { combineReducers } from 'redux'
import logo from '../logo.svg'


const initialState = {
  logo: logo,
  appTitle: `App Name Goes Here`
};

function representState(state, action) {
  if (typeof state === 'undefined') {
    return initialState
  }

  // For now, don't handle any actions
  // and just return the state given to us.
  return state
}

const rootReducer = combineReducers({
  representState
})

export default rootReducer;
