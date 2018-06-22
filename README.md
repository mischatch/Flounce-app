# Flounce app

[Flounce app live][heroku]

[heroku]: https://flounce-app.herokuapp.com/#/

Flounce app is a full-stack web application inspired by Behance. I uses Ruby on Rails on the backend, with a PostgreSQL as it's database and React.js with a Redux framework on the frontend.

# Features & Implementation

## User Authentication

* Frontend and backend user authentication encrypts user password with a BCrypt hashing function, creating a unique session token for each user on sign up or login.

* Predefined guest user account allows visitors to test features of the app without necessity to sign up.

![session](https://s3.us-east-2.amazonaws.com/clone-app-dev/auth.png)

## Main page

* Project cards

* User Login/Sign up panel

* Author contact information footer

* Ad banner

![Alt text](/app/assets/images/about/index.png)

## Modals

* Were used to implement project views on user profile page as well as on index page.

```javascript
render (){
    const { user, project, images } = this.props;
    return (
      <div className="project-box-small">
        <div className="card-box">
          <div className ="content-list">
            <div className="project">
              <section onClick={this.openModal}>
              <div className="project-pic">
                <div className="card-pic">
                  <img className="imgThumbnail" src={images[0]} />
                </div>
              </div>
              </section>
                <div className="card-text-space">
                  <div className="card-text">
                    <div className="card-title">{project.title}</div>
                    <Link to={`/users/${user.id}`}>
                    <div className="card-name">{user.username}</div>
                    </Link>
                  </div>
                  <div className="card-likes-cmnts">
                    <img className='smallLike' src='https://s3.us-east-2.amazonaws.com/clone-app-dev/like_icon.svg' />
                    {project.liker_id.length}
                    <img className='smallCommenticon' src='https://s3.us-east-2.amazonaws.com/clone-app-dev/noun_974856_cc.svg' />
                    {project.comment_num}
                  </div>
              </div>
            </div>
          </div>
      <Modal
        contentLabel="Modal"
        isOpen={this.state.modalOpen}
        onRequestClose={this.closeModal}
        style={style}>
        <div className="Modal-box">
          <ProjectDetailContainer
                  project={project}
                  user={user}
                  projectId={this.props.project.id} />
        </div>
      </Modal>
    </div>
  </div>
    )
}
```

## Comments and Appreciations

* Logged in users can:
* Leave comments under projects
* Appreciate the project(or depreciate)
* Likes and comments indicator

![comments and Appreciations](https://s3.us-east-2.amazonaws.com/clone-app-dev/comment_appr.png)

## User Profile page

* Shows user information(User image, username, about) and users projects.

![user show page](https://s3.us-east-2.amazonaws.com/clone-app-dev/user_profile.png)

## Creating new profile
  * User can sing-up
  * User can add and change avatar pictures
  * User can add and change about information

![Alt text](/app/assets/images/about/prof.png)

## Project create
  User can create project with:
  * Project name
  * Project about information
  * Images
    * Image upload implemented with React Dropzone
    * Image can be added by selecting or dran'n'drop feature
    * After selecting images will previewed on the page

![Alt text](/app/assets/images/about/proj.png)

## Technologies
* Backend
  * Ruby On Rails
  * jBuilder
  * PostgreSQL RDBMS

* Frontend
  * React/Redux
  * JavaScript
  * SCSS/CSS

## Storage
 * aws.amazon for storing pictures, such as user profile pictures and project pictures.

# Future Features


* Project tags
  *  Ability to add a tag to any project and be able to search by tag along all the projects.

* User Follows
  * Ability to follow any user with a feed page.
