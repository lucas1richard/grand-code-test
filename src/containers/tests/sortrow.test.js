import React from 'react';
import {Provider} from 'react-redux';
import { mount } from 'enzyme';
import SortRow from '../SortRow';
import configureStore from '../../store';
import {requestRepos, receiveRepos} from '../App/actions';
import {containsText} from '../../../test_utils';
import RepoLineItem from '../../components/RepoLineItem';

let store, wrapper;

const mockData = {
  repos: [1, 2, 3, 4, 5].map(num => ({
      html_url: '#',
      name: `${Math.random()}name${num}`,
      description: `desc${num}`,
      language: `lang${num}`,
      created_at: new Date(`2017-08-${Math.ceil(Math.random() * 13)}`)
    })
  ),
  username: 'test_username'
}

describe('Connected <SortRow />', () => {
  beforeEach(() => {
    store = configureStore();
    wrapper = mount(<Provider store={store}><SortRow /></Provider>)
  });

  it('sorts repos', () => {
    const sorted = mockData.repos.sort((aa, bb) => {
      if (aa.name > bb.name) {
        return 1;
      } else if (aa.name < bb.name) {
        return -1;
      } else {
        return 0;
      }
    });
    store.dispatch(receiveRepos(mockData.repos, mockData.username));
    const nameButton = wrapper.find('button').first();
    nameButton.simulate('click');
    expect(store.getState().app.repos).toEqual(sorted);
  });
});