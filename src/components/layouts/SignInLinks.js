import React from 'react'
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';

import { signOut } from '../../config/stores/actions/auth';

/* eslint eqeqeq: 0, curly: 2 */
const SignInLinks = props => {
  const { signOut, profile } = props
  const initialName = profile.isEmpty ? '-' : profile.initials

  return (
    <ul className="right">
      <li><NavLink to="/create">New Project</NavLink></li>
      {/* eslint-disable-next-line */}
      <li><a onClick={signOut}>Log Out</a></li>
      <li><NavLink to="/" className="btn btn-floating pink lighten-1">{initialName}</NavLink></li>
    </ul>
  )
}

const mapStateToProps = state => {
  const { firebase } = state
  
  return { profile: firebase.profile }
}

const mapDispatchToProps = dispatch => {
  return {
    signOut: () => dispatch(signOut())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignInLinks) 
