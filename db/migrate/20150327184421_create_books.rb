class CreateBooks < ActiveRecord::Migration
  def change
    create_table :books do |t|
      t.string :name
      t.string :college
      t.string :condition
      t.string :courseNumber
      t.string :department
      t.float :price
      t.string :additional

      t.timestamps null: false
    end
  end
end
