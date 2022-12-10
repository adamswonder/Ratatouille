class RecipesController < ApplicationController
    rescue_from ActiveRecord::RecordNotFound, with: :record_not_found_response
    # make sure the user is signed in before showing the resource
    before_action :authorize
    def index
        render json: Recipe.all
    end
    # GET /recipes/:id
    def show
        recipe = find_recipe
        render json: recipe, status: :ok
    end
    # POST /recipes
    def create
        user = User.find(session[:user_id])
        recipe = Recipe.create!(user_id: user.id, title: recipe_params[:title], instructions: recipe_params[:instructions], minutes_to_complete: recipe_params[:minutes_to_complete], image_url: recipe_params[:image_url])
        render json: recipe, status: :created
    end
    # DELETE /recipes/:id
    def destroy
        recipe = find_recipe
        recipe.destroy
        head :no_content
    end
    # PATCH /recipes/:id
    def update
        recipe = find_recipe
        recipe.update!(recipe_params)
        render json: recipe, status: :accepted
    end

    private
    def find_recipe
        Recipe.find_by!(id:params[:id])
    end
    
    def recipe_params
        params.permit(:title, :instructions, :minutes_to_complete, :image_url)
    end

    def authorize
        return render json: {errors: ["Not authorized"]}, status: :unauthorized unless session.include? :user_id
    end

    def record_not_found_response
        render json: { errors: "Recipe not found"}, status: :not_found
    end
end