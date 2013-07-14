class SessionsController < ApplicationController
  skip_before_filter :verify_authenticity_token, only: :omniauth
  
  def omniauth
  end

end
