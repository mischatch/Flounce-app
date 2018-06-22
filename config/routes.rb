

Rails.application.routes.draw do
  namespace :api, defaults: {format: :json} do
    resources :users, only: [:create, :show, :index, :update]
    resource :session, only: [:create, :destroy, :show]
    resources :projects, only: [:create, :update, :index, :show, :destroy] do
      resources :comments, only: [:index, :create]
      resources :images, only: [:index, :show, :create]
    end
    resources :likes, only: [:index, :create, :destroy]
    resources :comments, only: [:destroy]
  end

  # delete '/api/likes', :to => 'api/likes#destroy'

  root "static_pages#root"
end
