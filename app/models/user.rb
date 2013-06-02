class User < ActiveRecord::Base
  authenticates_with_sorcery!

  geocoded_by :full_address_for_geocoding

  after_validation :geocode

  has_many :messages
  has_many :listenings
  has_many :speakings

private
  
  def full_address_for_geocoding
    "#{address1} #{address2} #{city} #{state} #{zip}"
  end

end

