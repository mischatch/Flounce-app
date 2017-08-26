class AddUserpicToUsers < ActiveRecord::Migration[5.0]
  def change
    add_column :users, :userpic_id, :integer
  end
end
