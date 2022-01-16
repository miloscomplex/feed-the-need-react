class NeedyController < ApplicationController

  def index
    needys = Needy.all
    render json: needys
  end

  def show
    needy = Needy.find_by_id(params[:id])
    render json: needy
  end

end
