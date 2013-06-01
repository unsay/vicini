require 'spec_helper'

describe Listening do
  %w(user_id radius).each do |attr|
    it { should have_attribute(attr) }
  end

  it { should belong_to :user }
  it { should have_many :tags } 
end
