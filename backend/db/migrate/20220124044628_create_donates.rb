class CreateDonates < ActiveRecord::Migration[6.1]
  def change
    create_table :donates do |t|
      t.references :user, index: true
      t.references :item, index: true
      t.timestamps
    end
  end
end
