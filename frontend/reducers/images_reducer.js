import { RECEIVE_IMAGES, RECEIVE_IMAGE } from '../actions/image_actions';

import merge from 'lodash/merge';

const imagesReducer = (state = {}, action) => {
  Object.freeze(state);
  let nextState;

  switch(action.type){
    case RECEIVE_IMAGES:
      return action.images;
    case RECEIVE_IMAGE:
      const newImage = {[action.image.id]: action.image};
      return marge({}, state, newImage);
    default:
      return state;
  }
};

export default imagesReducer;
