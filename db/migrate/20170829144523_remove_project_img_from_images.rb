class RemoveProjectImgFromImages < ActiveRecord::Migration[5.0]
  def change
    remove_column :images, :project_img, :string
  end
end
