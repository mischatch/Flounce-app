import { combineReducers } from 'redux';
import SessionReducer from './session_reducer';
import projectsReducer from './projects_reducer';

const RootReducer = combineReducers({

  session: SessionReducer,
  projects: projectsReducer
});

export default RootReducer;
