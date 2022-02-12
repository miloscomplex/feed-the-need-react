class User < ApplicationRecord
    has_secure_password
  # validates :email, :password, :bio, presence: true

  has_many :items

end
