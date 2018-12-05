import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import SignInLinks from './SignInLinks';
import SignOutLinks from './SignOutLinks';

const Navbar = props => {
  const { isLogin } = props
  const links = isLogin ? <SignOutLinks /> : <SignInLinks />

  return (
    <nav className="nav-wrapper grey darken-3">
      <div className="container">
        <Link
          to="/"
          className="brand-logo">MarioPlan</Link>
        {links}
      </div>
    </nav>
  )
}

const mapStateToProps = state => {
  const { firebase } = state

  return { isLogin: firebase.auth.isEmpty }
}

export default connect(mapStateToProps)(Navbar)
