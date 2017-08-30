

Rails.application.routes.draw do
  namespace :api, defaults: {format: :json} do
    resource :user, only: [:create]
    resource :session, only: [:create, :destroy, :show]
    resources :projects, only: [:create, :index, :show] do
      resources :comments, only: [:index, :create]
      resources :images, only: [:index, :show]
    end
    resources :likes, only: [:create, :destroy]
    resources :comments, only: [:destroy]
  end

  # delete '/api/likes', :to => 'api/likes#destroy'

  root "static_pages#root"
end
