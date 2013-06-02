class MessagesController < ApplicationController
  def new
    @user = User.find(params[:user_id])
  end
end
