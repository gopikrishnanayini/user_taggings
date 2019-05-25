class Api::UsersController < ApplicationController
  respond_to :json
  before_action :set_instances_for_get_key, :check_user_presence_for_get_key, :only => [:log_in]
  skip_before_action :verify_authenticity_token , :only => [:update_status]

  def log_in
    if @user.present? and not (@user.encrypted_password == BCrypt::Engine.hash_secret(@password, @user.salt))
      render :status=>200, :json=>{:status=>"Failure",:message=>"Invalid password."} and return
    else
      if @user.present?
        @user.save
        render :staus => 200, :json => {:status => "Success",:users => @user.as_json(:except => [:image_file_name,:image_content_type,:image_file_size,:image_updated_at], :methods => [:image_url]) ,:todos => @user.todos.as_json(:except => [:image_file_name,:image_content_type,:image_file_size,:image_updated_at], :methods => [:image_url]) } rescue []
      else
        render :status => 200, :json => {:status => "Failure", :message => "Todo Not Found."}
      end
    end
  end

  def set_instances_for_get_key
    @user = User.find_by_email(params[:email].downcase) rescue nil
  end

  def check_user_presence_for_get_key
    @email, @password = params[:email], params[:password]
    if @email.blank? or @password.blank?
      if request.format == :json
        render :status=>200,:json=>{:status=>"Failure",:message=>"The request must contain the email and password."} and return
      else
        @status = 'Invalid Username or Password' and return
      end
    end
    if @user.nil?
      logger.info("User #{@email} failed signin, user cannot be found.")
      if request.format == :json
        render :status=>200, :json=>{:status=>"Failure",:message=>"Invalid email"} and return
      else
        @status = 'Invalid Username or Password'
      end
    end
  end

  def new_user
    @user = User.new(user_params)
    if @user.save
      flash[:notice] = "Successfully Saved"
      redirect_to root_path
    else
      render 'users/new'
    end
  end

  def edit_user
    params[:user][:id] =  params[:user][:id].to_i
    @user = User.find(params[:id].to_i)
    if @user.update_attributes(edit_user_params)
      flash[:notice] = "Successfully Saved"
      redirect_to root_path
    else
      render 'users/edit'
    end
  end

  def update_status
    params[:user][:id] =  params[:id].to_i
    @user = User.find(params[:id].to_i)
    @user.update_column :status, params[:user][:status]
  end

  def index
    @result = User.all.order('updated_at desc')
  end

  def show
    @result = User.find(params[:id])
  end

  def destroy
    user = User.find(params[:id])
    if user.destroy
      render json: { message: :success, data: user }, status: :ok
    else
      render json: { message: user.errors, type: :error }, status: :unprocessable_entity
    end
  end

  private

  def user_params
    params.require(:user).permit(:id, :first_name, :email, :password_confirmation,  :last_name, :status, :password)
  end

  def edit_user_params
    params.require(:user).permit(:id, :first_name, :last_name, :status, :password, :password_confirmation)
  end
end
