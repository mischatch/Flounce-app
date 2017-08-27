json.extract!(user, :id, :username)

json.userpic_url asset_path(user.userpic.url)
