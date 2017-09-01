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
