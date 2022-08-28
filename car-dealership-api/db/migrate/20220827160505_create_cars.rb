class CreateCars < ActiveRecord::Migration[7.0]
  def change
    create_table :cars do |t|
      t.string :model
      t.string :maker
      t.string :year

      t.timestamps
    end
  end
end
