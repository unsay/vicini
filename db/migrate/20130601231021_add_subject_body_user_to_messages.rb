class AddSubjectBodyUserToMessages < ActiveRecord::Migration
  def change
    add_column :messages, :user_id, :integer, null: false
    add_column :messages, :subject, :string
    add_column :messages, :body, :text 
  end
end
