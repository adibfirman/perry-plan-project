import React from 'react';
import { Link } from 'react-router-dom';

const ProjectSummary = React.lazy(() => import('./Summary'))

const ProjectList = ({ projects }) => (
  <div className="project-list section">
    { projects && projects.map(item => (
      <Link
        key={item.id}
        to={'/project/' + item.id}>
        <ProjectSummary
          title={item.title}
          firstName={item.authorFirstName}
          lastName={item.authorLastName}
          createdAt={item.createdAt} />
      </Link>
      )) }
  </div>
)

export default ProjectList
