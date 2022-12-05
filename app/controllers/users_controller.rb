class UsersController < ApplicationController
    def create
        user= User.create!(user_params)

        render json: user, status: :created
        
    end

    private

    def user_params
        user.permit(:username, :password, :password_confirmation, :image_url, :bio)
    end
end
