class RecipesController < ApplicationController
    rescue_from ActiveRecord::RecordNotFound, with: :render_record_not_found_response
    before_action :authorize
    def index
        render json: Recipe.all
    end

    def create
        user = User.find(session[:user_id])
        recipe = Recipe.create!(user_id: user.id, title: recipe_params[:title], instructions: recipe_params[:instructions], minutes_to_complete: recipe_params[:minutes_to_complete])
        render json: recipe, status: :created
    end

    def destroy
        recipe = Recipe.find(:id)
        recipe.destroy
        head :no_content
    end

    def update
        recipe = Recipe.find(:id)
        recipe.update!(recipe_params)
        render json: recipe, status: :accepted
    end

    private
    def recipe_params
        params.permit(:title, :instructions, :minutes_to_complete)
    end

    def authorize
        return render json: {errors: ["Not authorized"]}, status: :unauthorized unless session.include? :user_id
    end

    def render_not_found_response
        render json: { errors: "Recipe not found"}, status: :not_found
    end
end