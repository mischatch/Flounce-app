import projectsReducer from './projects_reducer';
import commentsReducer from './comments_reducer';
import SessionReducer from './session_reducer';
import imagesReducer from './images_reducer';
import usersReducer from './users_reducer';
import likesReducer from './likes_reducer';
import { combineReducers } from 'redux';

const RootReducer = combineReducers({

  projects: projectsReducer,
  comments: commentsReducer,
  session: SessionReducer,
  images: imagesReducer,
  users: usersReducer,
  likes: likesReducer,
});

export default RootReducer;
