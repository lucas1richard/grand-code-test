import React from 'react';
import ReactDOM from 'react-dom';
import { mount } from 'enzyme';
import CodeChallenge from '../CodeChallenge';

describe('<CodeChallenge />', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = mount(<CodeChallenge />);
  });

  it('renders without problems', () => {
    expect(wrapper.length).toEqual(1);
  });

  it('Has a title with h1', () => {
    expect(wrapper.find('h1').length).toEqual(1);
  });

  it('has an unordered list', () => {
    expect(wrapper.find('ul').length).toEqual(1);
  });

  it('has list items', () => {
    expect(wrapper.find('li').length).toBeGreaterThan(0);
  });

});