class CreateReviews < ActiveRecord::Migration[7.0]
  def change
    create_table :reviews do |t|
      t.text :content
      t.string :user_id
      t.string :recipe_id

      t.timestamps
    end
  end
end
