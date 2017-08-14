import React from 'react';
import {A, NP} from './styled';

const RepoLineItem = ({repo}) => {
  if(!repo) {
    repo = {
      html_url: null,
      name: null,
      description: null,
      language: null,
      created_at: null
    };
  }
  return (
    <li className="list-group-item">
      <div className="row">
        <div className="col-md-3">
          <A href={repo.html_url} target="_blank">{repo.name || <NP />}</A>
        </div>
        <div className="col-md-5">
          <b>Description:</b>
          <br />
          {repo.description || <NP />}
        </div>
        <div className="col-md-2">
          <b>Language:</b>
          <br />
          {repo.language || <NP />}
        </div>
        <div className="col-md-2">
          <b>Created:</b>
          <br />
          {
            repo.created_at && repo.created_at instanceof Date
            ? repo.created_at.toLocaleDateString()
            : <NP />
          }
        </div>
      </div>
    </li>
  );
};

export default RepoLineItem;
