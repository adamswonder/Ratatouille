class Recipe < ApplicationRecord
    has_many :users

    # validation
    validates :title, presence: true
    validates :instructions, presence: true, length: { minimum: 50 }
    validates :minutes_to_complete, presence: true
end