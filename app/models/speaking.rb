class Speaking < ActiveRecord::Base
  acts_as_taggable

  belongs_to :user

  delegate :latitude, to: :user 
  delegate :longitude, to: :user 
end
