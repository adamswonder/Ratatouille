Rails.application.routes.draw do
  resources :reviews
  resources :recipes, only: [:index]
  resources :users

  #TODO: create custom routes for Login and Sign Up

  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
end
