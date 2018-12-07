import React from 'react';
import moment from 'moment';

const ProjectSummary = ({ title, firstName, lastName, createdAt }) => {
  return (
    <div className="card z-depth-0 project-summary">
      <div className="card-content grey-text text-darken-3">
        <span className="card-title">{title}</span>
        <p>Posted: <em>{`${firstName} ${lastName}`}</em></p>
        <p className="grey-text">{moment(createdAt.toDate()).calendar()}</p>
      </div>
    </div>
  )
}

export default ProjectSummary
