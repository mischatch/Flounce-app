class RemoveUserpicIdFromUsers < ActiveRecord::Migration[5.0]
  def change
    remove_column :users, :userpic_id, :integer
  end
end
