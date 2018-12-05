import React from 'react'
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';

import { signOut } from '../../config/stores/actions/auth';

/* eslint eqeqeq: 0, curly: 2 */
const SignInLinks = props => {
  const { signOut } = props

  return (
    <ul className="right">
      <li><NavLink to="/create">New Project</NavLink></li>
      {/* eslint-disable-next-line */}
      <li><a onClick={signOut}>Log Out</a></li>
      <li><NavLink to="/" className="btn btn-floating pink lighten-1">NN</NavLink></li>
    </ul>
  )
}

const mapDispatchToProps = dispatch => {
  return {
    signOut: () => dispatch(signOut())
  }
}

export default connect(null, mapDispatchToProps)(SignInLinks) 
