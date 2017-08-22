class ChangeColumnName < ActiveRecord::Migration[5.0]
  def change
    rename_column :users, :passwrod_digest, :password_digest
  end
end
