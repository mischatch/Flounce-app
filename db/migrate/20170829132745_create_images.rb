class CreateImages < ActiveRecord::Migration[5.0]
  def change
    create_table :images do |t|
      t.string :project_img
      t.integer :project_id

      t.timestamps
    end
  end
end
