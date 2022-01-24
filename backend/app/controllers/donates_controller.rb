class DonatesController < ApplicationController

  def index
    donates = Item.all
    render json: donates
  end

  def show
    donate = Item.find_by_id(params[:id])
    render json: donate
  end

  def new
    donate = Item.new
    render json: donate
  end

  def create
    donate = Item.new(item_params)
    if donate.save
      render json: donate
    else
      render json: { errors: donate.errors }, status: 422
    end
  end

  private

  def item_params
    params.require(:donate).permit(:item_id, :user_id)
  end
end
