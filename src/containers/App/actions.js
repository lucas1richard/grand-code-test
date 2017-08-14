import {RECEIVE_REPOS, REQUEST_REPOS, SORT_REPOS} from './constants';

export const requestRepos = () => ({
  type: REQUEST_REPOS
});

export const receiveRepos = (repos, username) => ({
  type: RECEIVE_REPOS,
  payload: {
    repos,
    username
  }
});

export const sortRepos = param => ({
  type: SORT_REPOS,
  payload: param
});