import io from 'socket.io-client';
import { ADD_REVIEW, FINISH_ADD_REVIEW } from '../actions/reply';
import Review from '../common/review';
const socket = io();

const review = (state={io:socket, reviews:{}, reviewDict: {}, fetched:false, fetching: false}, action) => {
  switch (action.type) {
    case ADD_REVIEW:
      const { codeId, lineNum, parentId, content } = action.payload;
      const review = new Review(codeId, lineNum, parentId, content);
      const oldReviews = state.reviews[lineNum] || [];
      const newReviews = [...oldReviews, review];
      if (parentId !== 0) {
        state.reviewDict[parentId].addReview(review);
      }
      return Object.assign({}, state, {
        reviews: parentId !== 0 ? state.reviews : Object.assign({}, state.reviews, {
          [lineNum]: newReviews
        }),
        reviewDict: Object.assign({}, state.reviewDict,{[review.id]: review})
      });
    default:
      return state;
  }
};

export default review;
