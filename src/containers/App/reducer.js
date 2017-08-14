import axios from 'axios';
import {RECEIVE_REPOS, REQUEST_REPOS, SORT_REPOS} from './constants';
import {requestRepos as rquestRepos, receiveRepos, sortRepos as srtRepos} from './actions';
import sortparam from './sortparam';

export const initialState = ({
  ui: {
    loaded: true
  },
  repos: [],
  username: '',
  requestingRepos: false
});

function appReducer(state = initialState, action) {
  switch (action.type) {
    case RECEIVE_REPOS:
      state = Object.assign({}, state, {
        username: action.payload.username,
        requestingRepos: false
      });
      state.repos = [].concat(action.payload.repos);
      break;
    
    case REQUEST_REPOS:
      state = Object.assign({}, state, { requestingRepos: true });
      break;

    case SORT_REPOS:
      state = Object.assign({}, state);
      state.repos = state.repos.slice();
      state.repos = sortparam(state.repos, action.payload);
      break;
    
    default:
      break;
  }
  return state;
}

export default appReducer;

export const requestRepos = username => dispatch => {
  dispatch(rquestRepos());
  axios.get(`https://api.github.com/users/${username}/repos`)
    .then(({data}) => dispatch(receiveRepos(data, username)));
}

export const sortRepos = param => dispatch => {
  dispatch(srtRepos(param));
};
