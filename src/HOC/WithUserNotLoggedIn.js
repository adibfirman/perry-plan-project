import React, { PureComponent } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

const WithUserNotLoggedIn = () => BaseComponent => {
  class WrapperComponent extends PureComponent {

    render() {
      const { hasLogin, ...props } = this.props

      if (hasLogin) return <Redirect to="/signin" />

      return (
        <BaseComponent
          {...props}
          name="ferguso" />
      )

    }
    
  }

  const mapStateToProps = state => {
    const { firebase } = state

    return {
      hasLogin: firebase.auth.isEmpty
    }
  }

  return connect(mapStateToProps)(WrapperComponent)
}

export default WithUserNotLoggedIn
