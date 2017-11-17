class AddCalorieToUsers < ActiveRecord::Migration
  def change
    add_column :users, :calories, :float
  end
end
