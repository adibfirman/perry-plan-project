import React from 'react';

const ProjectDetail = ({ match }) => {
  const id = match.params.id

  return (
    <div className="container section project-details">
      <div className="card z-depth-0">
        <div className="card-content">
          <div className="card-title">Project Title - {id}</div>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolor dolore maiores, animi sed praesentium modi eius non aut aliquid repellat, officiis explicabo quaerat. Sit assumenda rerum dolores, eius vitae alias!</p>
        </div>
        <div className="card-action lighten-4 grey-text">
          <div>Posted By <i>The Adib</i></div>
          <div>2nd November, 2018</div>
        </div>
      </div>
    </div>
  )
}

export default ProjectDetail
