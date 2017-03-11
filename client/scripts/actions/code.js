import fetch from 'isomorphic-fetch'

export const RECEIVE_CODE = 'RECEIVE_CODE';
export const receiveCode = (code) => {
  return {
    type: RECEIVE_CODE,
    payload: code,
  };
};
export const fetchCode = (name) => {
  return (dispatch) => {
    let string = '';
    fetch(`http://localhost:3000/data/${name}`)
      .then((r) => r.text())
      .then((response) => {
        dispatch(receiveCode(response));
      });
  };
};
