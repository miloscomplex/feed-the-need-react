class ItemsController < ApplicationController

  def index
    items = Item.all
    render json: items
  end

  def show
    item = Item.find_by_id(params[:id])
    render json: item
  end

  def new
    item = Item.new
    render json: item
  end

  def create
    item = Item.new(item_params)
    if item.save
      render json: item
    else
      render json: { errors: item.errors }, status: 422
    end
  end

  private

  def item_params
    params.require(:item).permit(:name, :qty, :category, :donated, :user_id)
  end

end
