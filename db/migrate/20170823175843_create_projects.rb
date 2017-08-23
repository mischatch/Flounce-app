class CreateProjects < ActiveRecord::Migration[5.0]
  def change
    create_table :projects do |t|
      t.integer :user_id, null: false
      t.string :title, null: false
      t.string :description
      t.integer :image_id

      t.timestamps
    end
    add_index :projects, :user_id
  end
end
