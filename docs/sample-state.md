```js
{
  currentUser: {
    id: 1,
    username: 'SomeUser',
    email: 'mail@mail.com',
    about: 'someTextInfo'
  projects: {
    1: {
      id: 1,
      title: 'first project',
      description: 'very first project',
      user_id: 1
    },
    2: {
      id: 2,
      title: 'second project',
      description: 'very second project',
      user_id: 1,
      image_ids: [1, 2, 3],
    }
  }
  comments: {
    1: {
      id: 1,
      body: 'Great !',
      project_id: 1,
      username: 'Martin',
      user_id: 3
    }
  }
  errors: {
    session: {errors: []}
  }

}
