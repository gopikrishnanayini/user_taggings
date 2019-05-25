class CreateTags < ActiveRecord::Migration[5.1]
  def change
    create_table :tags do |t|
      t.text :description
      t.integer :user_id

      t.timestamps
    end
  end
end
