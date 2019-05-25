class Api::TagsController < ApplicationController
  respond_to :json
  before_action :authenticate_user!
  before_action :find_user, :only => [:index, :create]
  before_action :find_tag, :only => [:show, :update, :destroy]

  def create
    tag = @user.tags.build(tag_params)
    if tag.save
      render json: { message: :success, data: tag }, status: :created
    else
      render json: { message: tag.errors, type: :error }, status: :unprocessable_entity
    end
  end

  def show
  end

  def update
    if @tag.update_attributes(tag_params)
      render json: { message: :success, data: @tag }, status: :ok
    else
      render json: { message: @tag.errors, type: :error }, status: :unprocessable_entity
    end
  end

  def destroy
    if @tag.destroy
      render json: { message: :success, data: @tag }, status: :ok
    else
      render json: { message: @tag.errors, type: :error }, status: :unprocessable_entity
    end
  end

  private

  def find_tag
    @tag = Tag.find(params[:id])
  end

  def find_user
    @user = User.find(params[:user_id])
  end

  def tag_params
    params.require(:tag).permit!
  end
end
