class ApplicationController < ActionController::API
  #
  # before_action :require_login
  
  def logged_in?
    !!session_user
  end

  def require_login
    render json: {message: 'Please Login'}, status: :unauthorized unless logged_in?
  end
  
  #### START HELPER METHODS

  # Returns the current logged-in user (if any).
  def session_user
      session_user ||= User.find_by(id: session[:user_id])
  end

  # Returns true if the user is logged in, false otherwise.

  # Logs out the current user.
  def logout!
    session.clear
  end

  #### END HELPER METHODS

  def secret_key
    "iCanBeAnything"
  end

  #given a payload {user_id: ?} => token
  def encode(payload)
    JWT.encode(payload, secret_key, 'HS256')
  end

  #given a token "abc.345" => payload {user_id: ?}
  def decode(token)
    JWT.decode(token, "iCanBeAnything", true, {algorithm: "HS256"})[0]
  end

  def session_user
    decoded_hash = decoded_token
    if !decoded_hash.blank?
      user_id = decoded_hash[0]['user_id']
      @user = User.find_by(id: user_id)
    else
      nil
    end
  end

  def auth_header
    request.headers['Authorization']
  end

  def decoded_token
    if auth_header
      token = auth_header.split(' ')[1]
      begin
        JWT.decode(token, 'my_secret', true, algorithm: 'H5256')
      rescue JWT::DecodeError
        []
      end
    end
  end

end
