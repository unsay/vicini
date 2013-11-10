class UsersController < ApplicationController
  include Angular

  wrap_parameters User

  def index
    @users = User.all
    respond_with @users
  end

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
    @user = User.new(user_params)
    # authorize!(:create, @user)
    if(@user.save)
      respond_with @user
    else
      # Error json
      respond_with { head :no_content }
    end
  end

  def update
    set_user
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

    # This webapp is a trendy club. If you're not on the list yo don't get in.
    def user_params
      params[:user].permit(:id, :first_name, :last_name, :email)
    end
end
