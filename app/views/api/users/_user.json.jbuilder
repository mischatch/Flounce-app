json.extract!(user, :id, :username, :about)

json.userpic asset_path(user.userpic.url)

json.projects { json.array! user.projects }
