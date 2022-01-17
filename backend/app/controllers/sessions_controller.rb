class SessionsController < ApplicationController

  #### START HELPER METHODS

  # Returns the current logged-in user (if any).
  def current_user
      current_user ||= Donator.find_by(id: session[:user_id])
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
      session[:user_type] = :donator
      redirect_to donator_path(@donator)
    else
      flash[:error] = "Incorrect Password or Username"
      redirect_to login_path
    end
  end

  def logout
    logout!
    redirect_to root_path
  end

end
