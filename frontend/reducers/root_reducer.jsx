import { combineReducers } from 'redux';
import SessionReducer from './session_reducer';
import projectsReducer from './projects_reducer';
import usersReducer from './users_reducer';

const RootReducer = combineReducers({

  session: SessionReducer,
  projects: projectsReducer,
  users: usersReducer,
});

export default RootReducer;
