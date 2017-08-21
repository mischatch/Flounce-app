```js
{
  currentUser: {
    id: 1,
    username: 'SomeUser'
  },
  userDetail : {
    firstName: 'fname',
    lastName: 'lname',
    email: 'mail@mail.com',
    about: 'someTextInfo',

  },
  projects: {
    1: {
      id: 1,
      title: 'first project',
      description: 'very first project',
      userId: 1
    },
    2: {
      id: 2,
      title: 'second project',
      description: 'very second project',
      userId: 1
    }
  }
  projectDetail: {
    images: {
      1: {
        id: 1,
        imageUrl: 'www.example.com/12344',
        caption: ''
      }
      3: {
        id: 3,
        imageUrl: 'www.example.com/456789',
        caption: ''
      }
    }
  }
  comments: {
    1: {
      id: 1,
      body: 'Great !',
      projectId: 1,
      commentorId: 3
    }
  }
  errors: {
    session: {errors: []}
  }

}
