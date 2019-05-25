Rails.application.routes.draw do

  devise_for :users
  root 'users#index'
  namespace :api do
    devise_scope :user do
      post 'new_user', :to => "users#new_user"
      patch 'edit_user', :to => "users#edit_user"
      patch 'update_status', :to => "users#update_status"
    end
  end
  resources :users
  namespace :api do
    resources :users, :tags
  end
end
