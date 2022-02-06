class CreateCredits < ActiveRecord::Migration[6.1]
  def change
    create_table :credits do |t|
      t.integer :credit

      t.timestamps
    end

    add_reference :credits, :user, index: true
  end
end
