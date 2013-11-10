class Address < ActiveRecord::Base
  belongs_to :user

  geocoded_by :full_address
  after_validation :geocode

  def full_address
    [address1, address2, city, state, zip].join(", ").to_s
  end

end
