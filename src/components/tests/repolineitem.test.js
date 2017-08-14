import React from 'react';
import { shallow, mount } from 'enzyme';
import RepoLineItem from '../RepoLineItem';
import {containsText} from '../../../test_utils';

describe('<RepoLineItem />', () => {

  const repo = {
    html_url: '#',
    name: 'test_repo', // Should never be falsy
    description: null,
    language: 'JavaScript',
    created_at: new Date('2017-08-13') // Should never be falsy
  };
  
  const wrapper = mount(<RepoLineItem repo={repo} />);

  it('renders successfully', () => {
    expect(wrapper.length).toEqual(1);
  });

  describe('prop dependent display', () => {

    it('displays the repo name', () => {
      containsText(wrapper, repo.name);
    });
    
    it('displays the description or \'None Provided\'', () => {
      const numberNull = Object
        .keys(repo)
        .filter(key => !repo[key])
        .length;
      
      expect(wrapper.find('[data-after="None Provided"]').length).toEqual(numberNull);
    });
    
    it('displays the repo language', () => {
      containsText(wrapper, repo.language);
    });
    
    it('displays the date of creation', () => {
      containsText(wrapper, repo.created_at.toLocaleDateString());
    });

  });

  describe('edge cases', () => {
    const wrapper = mount(<RepoLineItem />);
    it('still renders with no repo prop', () => {
      expect(wrapper.length).toEqual(1);
    });
    it('displays \'gracefully\' with no repo prop', () => {
      expect(wrapper.find('[data-after="None Provided"]').length).toEqual(Object.keys(repo).length - 1);
    });
  });

});