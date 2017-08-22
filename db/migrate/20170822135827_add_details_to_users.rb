class AddDetailsToUsers < ActiveRecord::Migration[5.0]
  def change
    add_column :users, :email, :string
    add_index :users, :email
    add_column :users, :about, :string
  end
end
