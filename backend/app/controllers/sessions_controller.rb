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

  def which_user?
    session[:user_type]
  end

  #### END HELPER METHODS

  def create
    user = User.find_by(email: params[:email])
    if user && user.authenticate(params[:password])
      session[:user_id] = user.id
      render json: user
    else
      render json: { errors: user.errors }, status: 422
    end
  end

  def logout
    logout!
    # JWT prob goes here 
    render json: { session: 'clear' }
  end

end
