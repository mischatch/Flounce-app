export const fetchUser = userId => {
  return $.ajax ({
    method: 'GET',
    url: `/api/users/${userId}`,
  })
};


export const fetchUsers = () => (
  $.ajax ({
    method: 'GET',
    url: `/api/users`
  })
);

export const updateUser = (user, id)=> {
  debugger
  return $.ajax ({
    method: 'PATCH',
    url: `/api/users/${id}`,
    data: user,
    dataType: "json",
    processData: false,
    contentType: false,
  })
};
