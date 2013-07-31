class User < ActiveRecord::Base
  include OmniAuthable

  authenticates_with_sorcery!

  has_many :addresses
  has_many :listenings
  has_many :messages
  has_many :speakings

end
