class User < ApplicationRecord
  validates :email, :password, presence: true
  
  has_many :items

  has_secure_password



end
