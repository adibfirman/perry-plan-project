import React from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';

const Loader = React.lazy(() => import('../../components/Loader'));

const ProjectDetail = props => {
  const { project } = props

  if (project) {
    return (
      <div className="container section project-details">
        <div className="card z-depth-0">
          <div className="card-content">
            <div className="card-title">{project.title}</div>
            <p>{project.content}</p>
          </div>
          <div className="card-action lighten-4 grey-text">
            <div>Posted By <i>{project.authorFirstName} {project.authorLastName}</i></div>
            <div>2nd November, 2018</div>
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
  firestoreConnect(['projects'])
)(ProjectDetail)
