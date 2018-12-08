import React from 'react';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';

import { WithUserNotLoggedIn } from '../../HOC';

const Notification = React.lazy(() => import('./Notification'))
const ProjectList = React.lazy(() => import('../projects/List'))

const Dashboard = props => {

  const { listProject, listNotification } = props

  return (
    <div className="dashboard container">
      <div className="row">
        <div className="col s12 m6">
          <ProjectList projects={listProject} />
        </div>
        <div className="col s12 m5 offset-m1">
          <Notification notifications={listNotification} />
        </div>
      </div>
    </div>
  )

}

const mapStateToProps = state => {
  const { firestore } = state
  return {
    listProject: firestore.ordered.projects,
    listNotification: firestore.ordered.notifications
  }
}

export default compose(
  connect(mapStateToProps),
  firestoreConnect(['projects', { collection: 'notifications', limit: 3 }]),
  WithUserNotLoggedIn()
)(Dashboard)
