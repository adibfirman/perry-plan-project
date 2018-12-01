import React from 'react'

const ProjectSummary = ({ title, firstName, lastName }) => (
  <div className="card z-depth-0 project-summary">
    <div className="card-content grey-text text-darken-3">
      <span className="card-title">{title}</span>
      <p>Posted: <em>{`${firstName} ${lastName}`}</em></p>
      <p className="grey-text">3rd, September 2am</p>
    </div>
  </div>
)

export default ProjectSummary
