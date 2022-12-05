class User < ApplicationRecord
    has_secure_password

    has_many :recipes
    has_many :reviews

    validates :username, presence: true, uniqueness: true

    # Reviews
    # belongs_to :user
     # belongs_to :recipe


    #  Recipes
    # has_many :reviews
    # belongs_to :user
end
