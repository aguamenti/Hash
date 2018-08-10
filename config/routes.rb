Rails.application.routes.draw do
  root "static_pages#root"

  namespace :api, defaults: {format: :json} do
    resources :users, only: [:create]
    resource :session, only: [:create, :destroy]
    resources :channels, only: [:index, :show, :create, :update, :destroy]
  end

  mount ActionCable.server => '/cable'
end
