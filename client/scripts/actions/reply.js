export const OPEN_REPLY = 'OPEN_REPLY';
export const ADD_REVIEW = 'ADD_REVIEW';
export const FINISH_ADD_REVIEW = 'FINISH_ADD_REVIEW';

export const addReview = (codeId, lineNum, parentId, content) => {
  return {
    type: ADD_REVIEW,
    payload: {
      codeId,
      lineNum,
      parentId,
      content
    }
  }
}
