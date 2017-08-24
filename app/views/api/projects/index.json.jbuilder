json.projects do
  @projects.each do |project|
    json.set! project.id do
      json.partial! 'project', project: project
    end
  end
end

json.users do
  @projects.each do |project|
    json.set! project.user_id do
      json.extract! project.user, :id, :username
    end
  end
end
