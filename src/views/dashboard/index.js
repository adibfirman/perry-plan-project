import React, { Component } from 'react'
import { connect } from 'react-redux';

const Notification = React.lazy(() => import('./Notification'))
const ProjectList = React.lazy(() => import('../projects/List'))

class Dashboard extends Component {

  render () {
    const { listProject } = this.props

    return (
      <div className="dashboard container">
        <div className="row">
          <div className="col s12 m6">
            <ProjectList projects={listProject} />
          </div>
          <div className="col s12 m5 offset-m1">
            <Notification />
          </div>
        </div>
      </div>
    )
  }

}

const mapStateToProps = state => {
  const { project } = state
  return {
    listProject: project.projects
  }
}

export default connect(mapStateToProps)(Dashboard)
