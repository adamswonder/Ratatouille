class Recipe < ApplicationRecord
    belongs_to :user
    has_many :reviews

    # validation
    validates :title, presence: true
    validates :instructions, presence: true, length: { minimum: 5 }
    validates :minutes_to_complete, presence: true
    validates :image_url, presence: true
end