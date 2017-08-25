import React from 'react';
import ProjectIndex from './project_index';
import { Link } from 'react-router-dom';

const ProjectItem = ({ project, users }) => {
  const u_id = project.user_id;
  const user = users[u_id];
  return (
    <Link to={`/projects/${project.id}`}>
      <div className="card-box">
        <div className ="content-list">

          <div className="project">
            <div className="project-pic">
                <div className="card-pic">{/*   PLACE PICTURE HERE   */}</div>
            </div>
              <div className="card-text-space">
                <div className="card-text">
                  <div className="card-title">{project.title}</div>
                  <div className="card-name">{user.username}</div>
                </div>
            </div>
          </div>
        </div>
    </div>
  </Link>

  )
}

export default ProjectItem;
