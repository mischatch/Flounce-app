@images.each do |image|
  json.set! image.project_id do
    json.id image.id
    json.project_id image.project_id
    json.image_url image.image
  end
end
