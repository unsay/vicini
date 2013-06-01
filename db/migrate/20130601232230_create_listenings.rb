class CreateListenings < ActiveRecord::Migration
  def change
    create_table :listenings do |t|
      t.integer :user_id, null: false
      t.integer :radius
      t.timestamps
    end
  end
end
