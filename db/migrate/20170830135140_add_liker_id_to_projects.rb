class AddLikerIdToProjects < ActiveRecord::Migration[5.0]
  def change
    add_column :projects, :liker_id, :integer
  end
end
