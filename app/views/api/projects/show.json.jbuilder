json.set! :project do
  json.partial! '/api/projects/project', project: @project
end

  json.set! :user do
    json.extract! @project.user, :id, :username
  end
