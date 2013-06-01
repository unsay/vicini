class CreateSpeakings < ActiveRecord::Migration
  def change
    create_table :speakings do |t|
      t.integer :user_id, null: false
      t.integer :radius
      t.timestamps
    end
  end
end
