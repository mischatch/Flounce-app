

Rails.application.routes.draw do
  namespace :api, defaults: {format: :json} do
    resource :user, only: [:create]
    resource :session, only: [:create, :destroy, :show]
    resources :projects, only: [:create, :index, :show] do
      resources :comments, only: [:index, :create]
    end
    resources :comments, only: [:destroy]
  end

  root "static_pages#root"
end
