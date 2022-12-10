class ReviewsController < ApplicationController
    before_action :authorize
    def index
        review = Review.all
        render json: review, status: :ok
    end
    # POST /reviews
    def create
        user = User.find(session[:user_id])
        review = Review.create!(user_id: user.id, content: review_params[:content])
        render json: review, status: :created
    end

    private

    def review_params
        params.permit(:content)
    end

    def authorize
        return render json: {errors: ["Not authorized"]}, status: :unauthorized unless session.include? :user_id
    end
end
