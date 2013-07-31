class AddressesController < ApplicationController
  include Angular

  def show
    @address = Address.find(params[:id])
    authorize!(:read, @address)
    respond_with @address
  end

  def edit
    @address = Address.find(params[:id])
    authorize!(:edit, @address)
    respond_with @address
  end

end
