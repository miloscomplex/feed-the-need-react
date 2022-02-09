class SessionsController < ApplicationController

  #### START HELPER METHODS

  # Returns the current logged-in user (if any).
  def current_user
      current_user ||= User.find_by(id: session[:user_id])
  end

  # Returns true if the user is logged in, false otherwise.
  def logged_in?
    !!current_user
  end

  # Logs out the current user.
  def logout!
    session.clear
  end

  #### END HELPER METHODS


  def login
    user = User.find_by(email: params[:email])
    if user && user.authenticate(params[:password])
      payload = {user_id: user.id}
      token = encode(payload)
      render :json => { user: user, token: token, sucess: "Welcome back, #{{user.name}}"}
    else
      render json {failure: "Log in failed! Username or password invalid."}
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

end
