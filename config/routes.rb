Vicini::Application.routes.draw do
  match '/auth/:provider/callback', to: 'sessions#omniauth', via: :post

  resources :messages, only: :new
  resources :users
  root to: 'welcome#index'
end
