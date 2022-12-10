puts "destroying users"

User.destroy_all
Review.destroy_all
Recipe.destroy_all

puts "start seeding"

User.create(username:"Shrek", password:"shrek", password_confirmation:"shrek", bio:"Look, I am not the one with the problem, okay? It is the world that seems to have a problem with ME!")
User.create(username:"Donkey", password:"donkey", password_confirmation:"donkey", bio:"We can stay up late, swapping manly stories, and in the morning, I am making waffles!" )
User.create(username:"Fiona", password:"fiona", password_confirmation:"fiona", bio:"But I am supposed to be rescued by my true love, not by some ogre a-a-and his PET!" )
User.create(username:"Lord Fraquaad", password:"lordfraquaad", password_confirmation:"lordfraquaad", bio:"I have tried to be fair to you creatures, but now my patience has reached its end!")
User.create(username:"Gingerbread Man", password:"gingerbreadman", password_confirmation:"gingerbreadman", bio:"NO! Not the buttons! Not my gumdrop buttons!")
User.create(username:"Wolf", password:"wolf", password_confirmation:"wolf", bio:"What?")
User.create(username:"Robin Hood", password:"robinhood", password_confirmation:"robinhood", bio:"But I am not greedy. I rescue pretty damsels, man I am good!")
User.create(username:"Bishop", password:"bishop", password_confirmation:"bishop", bio:"We are gather here today to bear witness of the union of our new king.")
User.create(username:"Peter Pan", password:"peterpan", password_confirmation:"peterpan", bio:"He can fly." )
User.create(username:"The Three LIttle Pigs", password:"thethreelittlepiga", password_confirmation:"thethreelittlepigs", bio:"He huffed, and he puffed… and he signed an eviction notice.")

Recipe.create(title: Faker::Food.dish, instructions: Faker::Food.description, minutes_to_complete:rand(1..100), image_url:"https://i.ibb.co/XZtSb46/BFV13909-Baked-Ratatouille-Thumb-Textless1080.jpg", user_id: rand(1..10))
Recipe.create(title: Faker::Food.dish, instructions: Faker::Food.description, minutes_to_complete:rand(1..100), image_url:"https://i.ibb.co/cc0WRSM/Shakshuka-19.jpg", user_id: rand(1..10))
Recipe.create(title: Faker::Food.dish, instructions: Faker::Food.description, minutes_to_complete:rand(1..100), image_url:"https://i.ibb.co/WkX3dG7/samosa-recipe-500x375.jpg", user_id: rand(1..10))
Recipe.create(title: Faker::Food.dish, instructions: Faker::Food.description, minutes_to_complete:rand(1..100), image_url:"https://i.ibb.co/YD1MMb1/oyakodon-japanese-chicken-and-egg-rice-bowl-recipe-hero-f2d42cfe8e8e4436b97d6e79d038d9bc.jpg", user_id: rand(1..10))
Recipe.create(title: Faker::Food.dish, instructions: Faker::Food.description, minutes_to_complete:rand(1..100), image_url:"https://i.ibb.co/SXF8SQJ/Campbells-x-Richard-Blais-Tomato-Rigatoni-alla-Vodka-recipe-card-1106x830.jpg", user_id: rand(1..10))
Recipe.create(title: Faker::Food.dish, instructions: Faker::Food.description, minutes_to_complete:rand(1..100), image_url:"https://i.ibb.co/PhCfmp6/chicken-chickpea-curry-163942-1.jpg", user_id: rand(1..10))
Recipe.create(title: Faker::Food.dish, instructions: Faker::Food.description, minutes_to_complete:rand(1..100), image_url:"https://i.ibb.co/qpxFmbx/COOK90-Butter-Paneer-RECIPE-V2-121119-288.jpg", user_id: rand(1..10))
Recipe.create(title: Faker::Food.dish, instructions: Faker::Food.description, minutes_to_complete:rand(1..100), image_url:"https://i.ibb.co/9g1vJGh/Puttanesca-fd5810c.jpg", user_id: rand(1..10))
Recipe.create(title: Faker::Food.dish, instructions: Faker::Food.description, minutes_to_complete:rand(1..100), image_url:"https://i.ibb.co/yFmT102/0-C4-A9799-368x463.jpg", user_id: rand(1..10))
Recipe.create(title: Faker::Food.dish, instructions: Faker::Food.description, minutes_to_complete:rand(1..100), image_url:"https://i.ibb.co/QHYvPFw/Lamb-Chops-Sizzled-with-Garlic-FT-RECIPE0822-2000-a8c82475f602427e86083f2db1ecd37c.jpg", user_id: rand(1..10))

5.times  do
    Review.create(
        content: Faker::Lorem.word, user_id: rand(1..10) , recipe_id: rand(1..10)
    )
end

puts "seeded"

# TODO: change t.text to t.string in migration files
