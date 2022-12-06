class UsersController < ApplicationController
    def create
        user= User.create!(user_params)

        render json: user, status: :created
        
    end

    def index
        render json: User.all
    end

    private

    def user_params
        user.permit(:username, :password, :password_confirmation, :image_url, :bio)
    end
end
