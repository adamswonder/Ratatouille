Rails.application.routes.draw do
  resources :reviews
  resources :recipes, only: [:index]
  resources :users

  #TODO: create custom routes for Login and Sign Up

  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
  post "/users", to: "users#create"
  post "/login", to: "sessions#create"
  get "/me", to: "users#show"
  delete "/logout", to: "sessions#destroy"
end
