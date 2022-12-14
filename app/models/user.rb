class User < ApplicationRecord
    has_secure_password

    has_many :recipes
    has_many :reviews

    validates :username, presence: true, uniqueness: true
end
