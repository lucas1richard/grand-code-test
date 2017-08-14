import React from 'react';
import {connect} from 'react-redux';
import RepoLineItem from '../components/RepoLineItem';
import SortRow from './SortRow';

const ReposDisplay = ({ repos, username, requestingRepos }) => {
  if (requestingRepos) {
    return (
      <h3>Requesting Repos</h3>
    );
  }
  
  return (
    <div>
      {
        username.length
        ? <h3>GitHub Repositories for {username} ({repos.length} repositories)</h3>
        : null
      }
      {
        repos.length 
        ? <SortRow />
        : null
      }
      <ol className="list-group">
        {repos.map(repo => <RepoLineItem key={repo.name} repo={repo} />)}
      </ol>
    </div>
  );
};

const mapStateToProps = ({app}) => ({
  repos: app.repos.map(repo => {
    repo.created_at = new Date(repo.created_at)
    return repo;
  }),
  username: app.username,
  requestingRepos: app.requestingRepos
});

export default connect(mapStateToProps)(ReposDisplay);
