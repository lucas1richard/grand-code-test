import React from 'react';
import {connect} from 'react-redux';
import {requestRepos} from './App/reducer';
import {Input, Label} from '../components/styled';

class SearchForm extends React.Component {
  constructor() {
    super();
    this.state = {
      username: 'lucas1richard'
    };
    this.changeUsername = this.changeUsername.bind(this);
    this.submitForm = this.submitForm.bind(this);
  }

  changeUsername(ev) {
    this.setState({username: ev.target.value});
  }

  /** Only request the repositories if the username is different from what was requested previously */
  submitForm(ev) {
    ev.preventDefault();
    if (this.state.username === this.props.lastUsername) {
      return;
    }
    if (this.state.username.length) {
      this.props.reqRepos(this.state.username);
    } else {
      console.warn('No github username supplied');
    }
  }

  render() {
    return (
      <form onSubmit={this.submitForm}>
        <Label>GitHub Username</Label>
        <div className="input-group">
        <Input
          className="form-control"
          type="text"
          value={this.state.username}
          onChange={this.changeUsername}
        />
        <span className="input-group-btn">
        <button className="btn btn-primary" disabled={this.state.username === this.props.lastUsername}>
          Get Repositories
        </button>
        </span>
        </div>
      </form>
    );
  }
}

const mapStateToProps = ({app}) => ({
  lastUsername: app.username
});

const mapDispatchToProps = dispatch => ({
  reqRepos: username => dispatch(requestRepos(username))
});

export default connect(mapStateToProps, mapDispatchToProps)(SearchForm);
