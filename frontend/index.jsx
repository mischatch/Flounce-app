import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';
import { requestAllProjects, requestSingleProject, createProject } from './actions/project_actions';

document.addEventListener('DOMContentLoaded', () => {

  let store;
  if (window.currentUser) {
    const preloadedState = { session: { currentUser: window.currentUser , errors: [] }};
    store = configureStore(preloadedState);
    delete window.currentUser;
  } else {
    store = configureStore();
  }

  window.store = store;
  window.getState = store.getState;
  window.dispatch = store.dispatch;
  window.requestAllProjects = requestAllProjects;
  window.requestSingleProject = requestSingleProject;

  const root = document.getElementById('root');
  ReactDOM.render(<Root store={ store }/>, root);
});
