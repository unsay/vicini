FactoryGirl.define do
  sequence :user_id do |id|
    id
  end

  factory :address do
    #user
    user_id
    address1 { Faker::Address.street_address }
    city { Faker::Address.city }
    state { Faker::Address.state_abbr}
    zip { Faker::Address.zip_code }
  end
end
