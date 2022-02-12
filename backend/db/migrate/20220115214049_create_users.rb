class CreateUsers < ActiveRecord::Migration[6.1]
  def change
    create_table :users do |t|
      t.string :name
      t.string :email
      t.string :password
      t.string :user_type
      t.string :bio 

      t.timestamps
    end
  end
end
