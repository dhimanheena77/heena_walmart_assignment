import * as Constants from '../Constants';

export default function discount(state = 0, action) {
  switch (action.type) {
    case Constants.AVAIL_DISCOUNT:
      return 10;
    case Constants.REMOVE_DISCOUNT:
      return 0;
    default:
      return state;
  }
}
