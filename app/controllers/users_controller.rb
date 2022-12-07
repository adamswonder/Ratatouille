class UsersController < ApplicationController
rescue_from ActiveRecord::RecordInvalid, with: :render_record_invalid

    def create
        # creates a new user and creates session
        user= User.create!(user_params)
        session[:user_id] = user.id
        render json: user, status: :created  
    end

    def show
        # return logged in user details
        user = User.find_by(id: session[:user_id])
        if user
            render json: user, status: :ok
        else
            render json: {errors: "unauthorized"}, status: :unauthorized
        end
            
    end

    def index
        render json: User.all
    end

    private

    def user_params
        params.permit(:username, :password, :password_confirmation, :image_url, :bio)
    end

    def render_record_invalid(e)
        render json: { errors: e.record.errors.full_messages}, status: :unprocessable_entity
        end
end
