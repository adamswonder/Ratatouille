class CreateRecipes < ActiveRecord::Migration[7.0]
  def change
    create_table :recipes do |t|
      t.string :title
      t.text :instructions
      t.integer :minutes_to_complete
      t.string :image_url
      t.integer :user_id
      
      t.timestamps
    end
  end
end
