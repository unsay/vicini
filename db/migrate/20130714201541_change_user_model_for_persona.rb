class ChangeUserModelForPersona < ActiveRecord::Migration
  def up 
    remove_column :users, :username
  end

  def down
    add_column :users, :username, :string, :null => false
  end
end
