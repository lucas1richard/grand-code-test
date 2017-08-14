import React from 'react';
import { Li, H1 } from './styled';


const CodeChallenge = () => {
  return (
    <div>
      <H1 data-type="h1" className="text-center">Grand Front End Code Challenge</H1>
      <blockquote>
        <ul>
          <Li>Use the github rest api to fetch a user's repositories.</Li>
          <Li>It must search and select a user and then list their public repos.</Li>
          <Li>It should use redux and the store will be preconfigured for you.</Li>
          <Li>Create your own reducers/ actions/ constants/ selectors and test them fully!</Li>
          <Li>Use Styled-Components (optional).</Li>
          <Li>Separate dumb and smart components.</Li>
          <Li>UI choices are up to you but generally just one input and and a list is good enough.</Li>
          <Li>Folder structure is also up to you.</Li>
          <Li>When finished deploy the site statically somewhere, either to an S3 bucket or a GitHub page.</Li>
        </ul>
      </blockquote>
      <b>Submitted by Richard Lucas</b>
    </div>
  );
}

export default CodeChallenge;
