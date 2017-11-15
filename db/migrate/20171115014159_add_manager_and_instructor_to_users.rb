class AddManagerAndInstructorToUsers < ActiveRecord::Migration
  def change
    add_column :users, :manager, :boolean, default: false
    add_column :users, :instructor, :boolean, default: false
  end
end
