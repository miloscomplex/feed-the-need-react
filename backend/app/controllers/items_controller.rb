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
    item = Item.create(item_params)
    byebug
    if item.valid?
      render json: {name: item.name, category: item.category}, status: :item_accepted 
    else
      render json: { errors: item.errors.full_messages }, status: :not_acceptable
    end
  end

  private

  def item_params
    params.permit(:name, :qty, :category, :donated, :user_id, :image)
  end

end
