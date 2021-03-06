class SessionsController < ApplicationController

  skip_before_action :require_login, only: [:login, :auto_login]

  def new
    session_user ||= User.find_by(id: session[:user_id])
    render json: session_user
  end

  def login
    user = User.find_by(email: params[:email])
    if user && user.authenticate(params[:password])
      payload = {user_id: user.id}
      token = encode_token(payload)
      render :json => { user: user, token: token, success: "Welcome back, #{user.name}" }
    else
      render :json => {failure: "Log in failed! Username or password invalid."}
    end
  end

  def auto_login
    if session_user
      render json: session_user
    else
      render json: { errors: "No User Logged In"}
    end
  end
  
  def token_authenticate
    token = request.headers["Authenticate"]
    user = User.find(decode(token)["user_id"])
    render json: user
  end

  def logout
    logout!
    # JWT prob goes here
    render json: { session: 'clear' }
  end

  def user_is_authed
    render json: {message: "You are authorized"}
  end

  private

  def sessions_params
    params.permit(:name, :email, :bio, :password, :password_confirmation)
  end

end
