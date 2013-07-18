class SessionsController < ApplicationController
  skip_before_filter :verify_authenticity_token, only: [:omniauth, :status, :destroy]

  def destroy 
    logout 
    render :json => { status: 'okay' } 
  end
  
  def omniauth
    auth = request.env['omniauth.auth']
    user, auth = User.find_or_create_from_auth_hash(auth, params, request)
    auto_login(user) if user
    render :json => auth
  end

  def status
    status = (current_user) ? { email: current_user.email } : { email: false }
    render :json => status 
  end

end
