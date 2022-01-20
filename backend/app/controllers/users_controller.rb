class UsersController < ApplicationController

  def index
    users = User.all
    render json: users
  end

  def show
    user = User.find_by_id(params[:id])
    render json: user
  end

  def create
    user = User.new(user_params)
    if user.save
      session[:user_id] = user.id
      render json: user
    else
      render json: { errors: user.errors }, status: 422
    end
  end

  def update
    user = User.update(user_params)
    if user.save
      session[:user_id] = user.id
      render json: user
    else
      render json: { errors: user.errors }. status: 422
    end
  end


  private

  def user_params
    params.require(:user).permit(:name, :email, :bio, :password, :password_confirmation)
  end

  def set_user
    if current_user != User.find_by(id: params[:id])
      render json: { error: 'Uh oh, something went wrong'}
    else
      @user = User.find_by(id: params[:id])
    end
  end

end
