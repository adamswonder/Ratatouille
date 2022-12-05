class Review < ApplicationRecord
    belongs_to :user
    belongs_to :recipe

    #validation
    
end
