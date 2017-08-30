import { combineReducers } from 'redux';
import SessionReducer from './session_reducer';
import projectsReducer from './projects_reducer';
import usersReducer from './users_reducer';
import commentsReducer from './comments_reducer';
import imagesReducer from './images_reducer';
import likesReducer from './likes_reducer';

const RootReducer = combineReducers({

  session: SessionReducer,
  projects: projectsReducer,
  users: usersReducer,
  comments: commentsReducer,
  images: imagesReducer,
  likes: likesReducer
});

export default RootReducer;
