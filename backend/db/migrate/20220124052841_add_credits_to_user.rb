class AddCreditsToUser < ActiveRecord::Migration[6.1]
  def change
    add_column :users, :credits, :integer, default: 0
  end
end
