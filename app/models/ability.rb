class Ability
  include CanCan::Ability

  def initialize(user)
    user ||= User.new # guest user (not logged in)

    can :read, Address do |a|
      a.user_id == user.id
    end
  end
end
