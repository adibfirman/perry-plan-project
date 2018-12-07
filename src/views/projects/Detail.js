import React from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import moment from 'moment';

import { WithUserNotLoggedIn } from '../../HOC';

const Loader = React.lazy(() => import('../../components/Loader'));

const ProjectDetail = props => {
  const { project } = props

  if (project) {
    const { title, content, authorFirstName, authorLastName, createdAt } = project

    return (
      <div className="container section project-details">
        <div className="card z-depth-0">
          <div className="card-content">
            <div className="card-title">{title}</div>
            <p>{content}</p>
          </div>
          <div className="card-action lighten-4 grey-text">
            <div>Posted By <i>{authorFirstName} {authorLastName}</i></div>
            <div>{moment(createdAt.toDate()).calendar()}</div>
          </div>
        </div>
      </div>
    )
  } else {
    return <Loader />
  }

}

const mapStateToProps = (state, ownProps) => {
  const { firestore } = state
  const { id } = ownProps.match.params
  const { projects } = firestore.data
  const project = projects ? projects[id] : null

  return { project }
}

export default compose(
  connect(mapStateToProps),
  firestoreConnect(['projects']),
  WithUserNotLoggedIn()
)(ProjectDetail)
