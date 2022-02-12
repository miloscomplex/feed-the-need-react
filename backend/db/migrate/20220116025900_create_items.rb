class CreateItems < ActiveRecord::Migration[6.1]
  def change
    create_table :items do |t|
      t.string :name
      t.integer :qty
      t.string :category
      t.string :image 
      t.timestamps
    end

    add_reference :items, :user, index: true
  end
end
