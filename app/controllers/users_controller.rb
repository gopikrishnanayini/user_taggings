class UsersController < ApplicationController
  before_action :authenticate_user!, :only => [:index]

  def new
    @user = User.new
  end

  def edit
    @user = User.find(params[:id])
  end

  def index
  end

end
