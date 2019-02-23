import * as Constants from '../Constants';

const initialState = {};

export default function product(state = initialState, action) {
  switch (action.type) {
    case Constants.GET_PROUDUCT_DETAILS :
      return action.payload
    default:
      return state;
  }
}
