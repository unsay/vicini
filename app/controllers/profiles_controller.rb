class ProfilesController < ApplicationController
  include Angular

  def show
    @profile = Profile.find(params[:id])
    authorize!(:read, @profile)
    respond_with @profile
  end

  def edit
    @profile = Profile.find(params[:id])
    authorize!(:edit, @profile)
    respond_with @profile
  end

end
