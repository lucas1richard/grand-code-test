import React from 'react';
import {Provider} from 'react-redux';
import { mount } from 'enzyme';
import SearchForm from '../SearchForm';
import configureStore from '../../store';
import {requestRepos, receiveRepos} from '../App/actions';
import {containsText} from '../../../test_utils';
import RepoLineItem from '../../components/RepoLineItem';

let store, wrapper;

describe('Connected <SearchForm />', () => {
  beforeEach(() => {
    store = configureStore();
    wrapper = mount(<Provider store={store}><SearchForm /></Provider>)
  });

  it('renders', () => {
    expect(wrapper.find(SearchForm).length).toEqual(1);
  });

  it('changes the username input', () => {
    const input = wrapper.find('input');
    input.simulate('change', {target: {value: 'bob'}});
    expect(input.prop('value')).toEqual('bob');
  });

  it('updates the application state', () => {
    expect(store.getState().app.username).toEqual('');
    expect(store.getState().app.repos.length).toEqual(0);
    const button = wrapper.find('button');
    button.simulate('click');
    setTimeout(0, () => {
      expect(store.getState().app.username).toEqual('lucas1richard');
      expect(store.getState().app.repos.length).toBeGreaterThan(0);
    });
  });
 
});