class ProfilesController < ApplicationController
  include Angular

  def show
    @profile = Profile.find(params[:id])
    authorize!(:read, @profile)
    respond_with @profile
  end

  def create
    # logger.debug(params.inspect)
    @profile = Profile.new(params[:profile].permit(:first_name, :last_name, :address1, :address2, :city, :state, :zip))
    # authorize!(:create, @profile)
    if(@profile.save)
      respond_with @profile
    else
      # Error json
    end
  end

  def edit
    @profile = Profile.find(params[:id])
    authorize!(:edit, @profile)
    respond_with @profile
  end

end
