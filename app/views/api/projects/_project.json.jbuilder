json.extract! project, :id, :user_id, :title, :description
json.imageUrls project.images.map { |image| image.image.url }
json.liker_id project.likes.map { |like| like.user_id }
json.comment_num project.comments.length
