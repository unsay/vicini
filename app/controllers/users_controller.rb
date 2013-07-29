class UsersController < ApplicationController
  include Angular

  def show
    @user = User.find(params[:id])
    # authorize!(:read, @user)
    respond_with @user
  end

  def edit
    @user = current_user
  end

  def create
    # logger.debug(params.inspect)
    @user = User.new(params[:user].permit(:first_name, :last_name, :address1, :address2, :city, :state, :zip))
    # authorize!(:create, @user)
    if(@user.save)
      respond_with @user
    else
      # Error json
      respond_with { head :no_content }
    end
  end

  def update
    respond_to do |format|
      if @user.update(user_params)
        format.html { redirect_to @user, notice: 'User was successfully updated.' }
        format.json { head :no_content }
      else
        format.html { render action: 'edit' }
        format.json { render json: @user.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /users/1
  # DELETE /users/1.json
  def destroy
    @user.destroy
    respond_to do |format|
      format.html { redirect_to users_url }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_user
      @user = User.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def user_params
      params[:user].permit(:username, :first_name, :last_name, :address1, :address2, :city, :state, :zip, :phone, :email)
    end
end
