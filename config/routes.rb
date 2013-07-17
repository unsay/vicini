Vicini::Application.routes.draw do
  match '/auth/:provider/callback', to: 'sessions#omniauth', via: :post
  match '/auth/status', to: 'sessions#status', via: :post
  match '/logout', to: 'sessions#destroy', via: :post
  match '/profile/edit', to: 'users#edit', via: :get

  resources :messages, only: :new
  resources :users
  resources :welcome, only: :index
  root to: 'app#index'
end
