require 'spec_helper'

describe User do
  it { should have_many :addresses }
  it { should have_many :listenings }
  it { should have_many :messages }
  it { should have_many :speakings }
end
