import { UPDATE_SELECTED_SERVICE } from '../actions/ServiceActions'

const INITIAL_STATE = {
  selectedService: ""
}

export default (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case UPDATE_SELECTED_SERVICE:
      return { ...state, selectedService: action.payload }
    default:
      return state
  }
}
