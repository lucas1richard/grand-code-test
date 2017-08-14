import React from 'react';
import {sortRepos} from './App/reducer';
import {connect} from 'react-redux';
import {Sort} from '../components/styled';

const SortRow = ({ sortR }) => {
  return (
    <div className="list-group-item">
      <div className="row">
        <div className="col-md-3 col-xs-5">
          <Sort onClick={() => sortR('name')}>Sort by Name</Sort>
        </div>
        <div className="col-md-5 col-xs-1" />
        <div className="col-md-2 col-xs-1" />
        <div className="col-md-2 col-xs-5">
          <Sort onClick={() => sortR('created_at')}>Sort by Date</Sort>
        </div>
      </div>
    </div>
  );
};

const mapDispatchToProps = dispatch => ({
  sortR: param => dispatch(sortRepos(param))
});

export default connect(null, mapDispatchToProps)(SortRow);
