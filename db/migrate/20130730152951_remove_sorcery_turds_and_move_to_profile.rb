class RemoveSorceryTurdsAndMoveToProfile < ActiveRecord::Migration
  def up 
    change_table :users do |t|
      t.remove :crypted_password
      t.remove :salt
      t.remove :phone
      t.remove :address1
      t.remove :address2
      t.remove :city
      t.remove :state
      t.remove :zip
      t.remove :latitude
      t.remove :longitude
    end
    change_table :profiles do |t|
      t.column :address1, :string
      t.column :address2, :string
      t.column :city, :string
      t.column :state, :string
      t.column :zip, :string
      t.column :latitude, :float
      t.column :longitude, :float
    end
    rename_table :profiles, :addresses
  end

  def down
    rename_table :addresses, :profiles
    change_table :profiles do |t|
      t.remove :address1
      t.remove :address2
      t.remove :city
      t.remove :state
      t.remove :zip
      t.remove :latitude
      t.remove :longitude
    end
    change_table :users do |t|
      t.column :crypted_password, :string, :default => nil
      t.column :salt, :string, :default => nil
      t.column :phone, :string
      t.column :address1, :string
      t.column :address2, :string
      t.column :city, :string
      t.column :state, :string
      t.column :zip, :string
      t.column :latitude, :float
      t.column :longitude, :float
    end
  end
end
