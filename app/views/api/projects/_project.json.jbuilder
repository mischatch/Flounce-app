json.extract! project, :id, :user_id, :title, :description
json.imageUrls project.images.map { |image| image.image.url }
