Vicini::Application.routes.draw do
  match ':controller(/:action).ng', format: 'ng', via: :get

  match '/auth/:provider/callback', to: 'sessions#omniauth', via: :post
  match '/auth/status', to: 'sessions#status', via: :post
  match '/logout', to: 'sessions#destroy', via: :post

  resources :addresses
  resources :directory
  resources :messages, only: :new
  resources :users
  resources :welcome, only: :index
  root to: 'app#index'
end
