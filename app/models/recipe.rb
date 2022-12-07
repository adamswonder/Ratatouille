class Recipe < ApplicationRecord
    belongs_to :user
    has_many :reviews

    # validation
    validates :title, presence: true
    validates :instructions, presence: true, length: { minimum: 50 }
    validates :minutes_to_complete, presence: true
end