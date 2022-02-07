class ApplicationController < ActionController::API

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

end
