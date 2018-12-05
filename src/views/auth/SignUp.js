import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';

import { WithUserLoggedIn } from '../../HOC';
import { signUp } from '../../config/stores/actions/auth';

class SignUp extends PureComponent {

  state = {
    email: '',
    password: '',
    firstName: '',
    lastName: ''
  }

  handleChange = e => {
    this.setState({
      [e.target.id]: e.target.value
    })
  }

  handleSubmit = e => {
    e.preventDefault()
    this.props.signUp(this.state)
  }

  render() {
    const { email, password, firstName, lastName } = this.state
    const { errorText } = this.props

    return (
      <div className="container">
        <form onSubmit={this.handleSubmit} className="white">
          <h5 className="grey-text text-darken-3">Sign In</h5>
          <div className="input-field">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              onChange={this.handleChange}
              value={email} />
          </div>
          <div className="input-field">
            <label htmlFor="firstName">First Name</label>
            <input
              type="text"
              id="firstName"
              onChange={this.handleChange}
              value={firstName} />
          </div>
          <div className="input-field">
            <label htmlFor="lastName">Last Name</label>
            <input
              type="text"
              id="lastName"
              onChange={this.handleChange}
              value={lastName} />
          </div>
          <div className="input-field">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              onChange={this.handleChange}
              value={password} />
          </div>
          <div className="input-field">
            <button className="btn pink lighten-1 z-depth-0">Register</button>
            { errorText && <div className="center red-text">{errorText}</div> }
          </div>
        </form>
      </div>
    )
  }

}

const mapStateToProps = state => {
  const { auth } = state

  return {
    errorText: auth.error.signup
  }
}

const mapDispatchToProps = dispatch => {
  return {
    signUp: dataUser => dispatch(signUp(dataUser))
  }
}

export default compose(
  WithUserLoggedIn(),
  connect(mapStateToProps, mapDispatchToProps)
)(SignUp)
