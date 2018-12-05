import React, { PureComponent } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

const WithUserLoggedIn = () => BaseComponent => {
  class WrapperComponent extends PureComponent {

    render() {
      const { hasLogin, ...props } = this.props

      if (hasLogin) return <Redirect to="/" />

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
      hasLogin: !firebase.auth.isEmpty
    }
  }

  return connect(mapStateToProps)(WrapperComponent)
}

export default WithUserLoggedIn
