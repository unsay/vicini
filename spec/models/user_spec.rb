require 'spec_helper'

describe User do
  it { should have_many :listenings }
  it { should have_many :profiles }
  it { should have_many :messages }
end
