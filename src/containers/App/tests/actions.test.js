import {RECEIVE_REPOS, REQUEST_REPOS, SORT_REPOS} from '../constants';
import {requestRepos, receiveRepos, sortRepos} from '../actions';

describe('actions', () => {

  describe('requestRepos', () => {
    it('creates a request object', () => {
      expect(requestRepos()).toEqual({
        type: REQUEST_REPOS
      });
    });
  });

  describe('receiveRepos', () => {
    it('creates a receive object', () => {
      expect(receiveRepos([], 'test')).toEqual({
        type: RECEIVE_REPOS,
        payload: {
          repos: [],
          username: 'test'
        }
      });
    });
  });

  describe('sortRepos', () => {
    it('creates a sort object', () => {
      expect(sortRepos('name')).toEqual({
        type: SORT_REPOS,
        payload: 'name'
      });
    });
  });

});
