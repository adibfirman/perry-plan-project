import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { signIn } from '../../config/stores/actions/auth';

class SignIn extends PureComponent {

  state = {
    email: '',
    password: ''
  }

  handleChange = e => {
    this.setState({
      [e.target.id]: e.target.value
    })
  }

  handleSubmit = e => {
    e.preventDefault()
    this.props.goSignin(this.state)
  }

  render() {
    const { email, password } = this.state
    const { errorMsg } = this.props

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
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              onChange={this.handleChange}
              value={password} />
          </div>
          <div className="input-field">
            <button className="btn pink lighten-1 z-depth-0">Login</button>
            { errorMsg && <div className="center red-text">{errorMsg}</div> }
          </div>
        </form>
      </div>
    )
  }

}

const mapStateToProps = state => {
  const { auth } = state
  
  return {
    errorMsg: auth.authError
  }
}

const mapDispatchToProps = dispatch => {
  return {
    goSignin: creds => dispatch(signIn(creds))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignIn)
