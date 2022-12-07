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

10.times do
    Recipe.create(
        title: Faker::Food.dish, instructions: Faker::Food.description, minutes_to_complete:rand(1..100), user_id: rand(1..10)
    )
end

5.times  do
    Review.create(
        content: Faker::Lorem.word, user_id: rand(1..10) , recipe_id: rand(1..10)
    )
end

puts "seeded"

# TODO: change t.text to t.string in migration files
