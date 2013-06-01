require 'spec_helper'

describe Message do
  %w(user_id subject body).each do |attr|
    it { should have_attribute(attr) }
  end

  it { should belong_to :user }
  it { should have_many :tags } 
end
