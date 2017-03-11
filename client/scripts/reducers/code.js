import { RECEIVE_CODE } from '../actions/code';

const code = (state={code:'Hello World', fetched: false, fetching: false, name:'code.c'}, action) => {
  switch (action.type) {
    case RECEIVE_CODE:
      return Object.assign({}, state, {
        fetched: true,
        fetching: false,
        code: action.payload});
    default:
      return state;
  }
};

export default code;
