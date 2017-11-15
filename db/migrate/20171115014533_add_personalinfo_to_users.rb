class AddPersonalinfoToUsers < ActiveRecord::Migration
  def change
    add_column :users, :height, :integer
    add_column :users, :weight, :integer
    add_column :users, :date_of_birth, :date
    add_column :users, :description, :text
  end
end
