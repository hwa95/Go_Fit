class CreateCources < ActiveRecord::Migration
  def change
    create_table :cources do |t|
      t.string :title
      t.date :start_date
      t.date :end_date
      t.integer :max_student

      t.timestamps null: false
    end
  end
end
