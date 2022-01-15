class UsersController < ApplicationController

  def index
    Users.all
  end
  
end
