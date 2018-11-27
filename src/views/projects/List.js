import React from 'react'

const ProjectSummary = React.lazy(() => import('./Summary'))

const ProjectList = ({ projects }) => (
  <div className="project-list section">
    { projects.map(item => (
        <ProjectSummary
          title={item.title}
          key={item.id} />
      )) }
  </div>
)

export default ProjectList
