json.extract! project, :id, :user_id, :title, :description
json.imageUrls project.images.map { |image| image.image.url }
json.liker_ids project.likes.map { |like| like.user_id }
json.comment_num project.comments.length
# json.likes project.likes

# json.likes do
#   project.likes.each do |like|
#     json.set! like.user_id do
#       json.extract! like, :id, :user_id, :project_id
#     end
#   end
# end










#
#
#
# json.projects do
#   @projects.each do |project|
#     json.set! project.id do
#       json.partial! 'project', project: project
#       project.images
#     end
#   end
# end
