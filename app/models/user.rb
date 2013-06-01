class User < ActiveRecord::Base
  authenticates_with_sorcery!
  geocoded_by :address1

  after_validation :geocode
end
