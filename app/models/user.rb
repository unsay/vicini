class User < ActiveRecord::Base
  include OmniAuthable

  authenticates_with_sorcery!

  #acts_as_geolocated

  geocoded_by :full_address_for_geocoding

  after_validation :geocode

  has_many :listenings
  has_many :messages
  has_many :speakings

  def speaking_to(tag_id)
    User.within_radius
  end

private
  
  def full_address_for_geocoding
    "#{address1} #{address2} #{city} #{state} #{zip}"
  end

end
