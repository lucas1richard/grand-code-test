import React from 'react';
import {Provider} from 'react-redux';
import { mount } from 'enzyme';
import ReposDisplay from '../ReposDisplay';
import configureStore from '../../store';
import {requestRepos, receiveRepos} from '../App/actions';
import {containsText} from '../../../test_utils';

let store, wrapper;

const mockData = {
  repos: [1, 2, 3, 4, 5].map(num => ({
      html_url: '#',
      name: `name${num}`,
      description: `desc${num}`,
      language: `lang${num}`,
      created_at: '2017-08-13'
    })
  ),
  username: 'test_username'
}

describe('<ReposDisplay />', () => {
  beforeEach(() => {
    store = configureStore();
    wrapper = mount(<Provider store={store}><ReposDisplay /></Provider>)
  });

  it('renders', () => {
    expect(wrapper.find('div').length).toEqual(1);
  });

  it('shows message on requestingRepos', () => {
    store.dispatch(requestRepos());
    expect(wrapper.find('h3').length).toEqual(1);
    containsText(wrapper, 'Requesting Repos');
  });

  it('displays repos and sort row', () => {
    store.dispatch(receiveRepos(mockData.repos, mockData.username));
    expect(wrapper.find('.list-group-item').length).toEqual(mockData.repos.length + 1);
  });
});